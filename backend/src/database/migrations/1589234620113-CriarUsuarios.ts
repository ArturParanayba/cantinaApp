import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CriarUsuarios1589234620113 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'senha',
            type: 'varchar',
          },
          {
            name: 'saldo',
            type: 'float',
            default: '0.00',
          },
          {
            name: 'cnpjNucleo',
            type: 'varchar',
          },
          {
            name: 'ultimaCompra',
            type: 'timestamp with time zone',
            isNullable: true,
          },
          {
            name: 'criadoEm',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'atualizadoEm',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    // Foreign key de conexão com a tabela Nucleos
    await queryRunner.createForeignKey(
      'usuarios',
      new TableForeignKey({
        name: 'UsuarioNucleo',
        columnNames: ['cnpjNucleo'],
        referencedColumnNames: ['cnpj'],
        referencedTableName: 'nucleos',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('usuarios', 'UsuarioNucleo');

    await queryRunner.dropTable('usuarios');
  }
}

import {
  Entity,
  Column,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('nucleos')
class Nucleo {
  @PrimaryColumn()
  cnpj: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;
}

export default Nucleo;

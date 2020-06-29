import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Nucleo from './Nucleo';

@Entity('usuarios')
class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  saldo: number;

  @Column()
  cnpjNucleo: string;

  @ManyToOne(() => Nucleo)
  @JoinColumn({ name: 'cnpjNucleo' })
  nucleo: Nucleo;

  @Column()
  ultimaCompra: Date;

  @CreateDateColumn()
  criadoEm: Date;

  @UpdateDateColumn()
  atualizadoEm: Date;
}

export default Usuario;

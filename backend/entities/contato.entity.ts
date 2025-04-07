// filepath: backend/entities/contato.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('contatos')
export class Contato {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 50 })
  nome!: string;

  @Column({ type: 'varchar', length: 20 })
  numero!: string;
}
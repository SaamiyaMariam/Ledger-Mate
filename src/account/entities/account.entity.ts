// src/account/account.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @Column()
  accountName: string;

  @Column({ nullable: true })
  leadSheet: string;

  @Column('decimal', { nullable: true })
  opening: number;

  @Column('decimal', { nullable: true })
  closing: number;
}

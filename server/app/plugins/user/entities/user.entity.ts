import { hashPassword } from '@foal/core';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/BaseEntity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;

  @Column('varchar', {
    unique: true,
    length: 32,
  })
  email: string;

  @Column({ select: false })
  password: string;

  @Column('varchar', {
    name: 'first_name',
    length: 32,
  })
  firstName: string;

  @Column('varchar', {
    name: 'last_name',
    length: 32,
  })
  lastName: string;

  async setPassword(password: string) {
    this.password = await hashPassword(password);
  }
}

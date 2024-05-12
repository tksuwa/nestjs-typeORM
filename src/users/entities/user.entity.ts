import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    comment: 'User ID',
  })
  readonly id: number;

  @Column('varchar', { comment: 'User name' })
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_users') 
export class admin_users {
  
  @PrimaryGeneratedColumn()
  'id': number;

  @Column({ unique: true })
  'username': string;

  @Column()
  'password': string;

  @Column({
    type: 'enum',
    enum: ['admin', 'employee'],
    default: 'employee',
  })
  'role': string;

  @Column({ nullable: true })
  'email': string;

  @Column({ default: true })
  'is_active': boolean;
}
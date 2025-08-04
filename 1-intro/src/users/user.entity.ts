import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  surname: string;

  @Column({
    type: 'enum',
    default: 'unknown',
  })
  gender?: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;
}

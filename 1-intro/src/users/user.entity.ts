import { Tweet } from 'src/tweet/tweet.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToMany(() => Tweet, {
    cascade: true,
  })
  @JoinColumn()
  tweet?: Tweet;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;
}

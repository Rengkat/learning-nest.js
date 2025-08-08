import { Tweet } from 'src/tweet/tweet.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Profile {
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

  @OneToOne(() => Profile)
  @JoinColumn()
  profile?: Profile;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  email: string;
}

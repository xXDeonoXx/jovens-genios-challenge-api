import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Topic } from 'src/topics/entities/topic.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@UseInterceptors(ClassSerializerInterceptor)
@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  statement: string;

  @Column()
  answer: string;

  @Column()
  opt_a: string;

  @Column()
  opt_b: string;

  @Column()
  opt_c: string;

  @Column()
  opt_d: string;

  @ManyToOne(() => Topic)
  topic: Topic;
}

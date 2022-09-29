import { ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@UseInterceptors(ClassSerializerInterceptor)
@Entity('topics')
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

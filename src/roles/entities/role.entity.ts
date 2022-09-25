import { UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role as RoleEnum } from 'src/enums/role.enum';

@UseInterceptors(ClassSerializerInterceptor)
@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: RoleEnum;
}

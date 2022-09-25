import { IsNotEmpty } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateRoleDto {
  @IsNotEmpty()
  name: Role;
}

import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Public } from 'src/utils/Public';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('')
  async testnoRole() {
    return 'Alive, no roles';
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async authenticate(@Req() req): Promise<any> {
    return this.authService.login(req.user);
  }
}

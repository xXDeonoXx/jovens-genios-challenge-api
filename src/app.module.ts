import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { RolesGuard } from './roles/roles.guard';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { QuestionsModule } from './topics/questions/questions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    RolesModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TopicsModule,
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}

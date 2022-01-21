import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';




@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db.sqlite',
    entities:[User],
    synchronize:true
  }),TodosModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

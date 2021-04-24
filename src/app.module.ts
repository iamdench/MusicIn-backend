import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'

@Module({
  imports: [
      UsersModule,
      MongooseModule.forRoot(`mongodb+srv://denis:qazzaq123@cluster0.tb4op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

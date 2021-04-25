import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module'
import {AuthModule} from "./users/auth/auth.module";
import {mongooseKeys} from "./mongoose.keys";

@Module({
  imports: [
      UsersModule,
      AuthModule,
      MongooseModule.forRoot(`mongodb+srv://${mongooseKeys}@cluster0.tb4op.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

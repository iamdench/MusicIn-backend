import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../schemas/user.schema";
import {Model} from "mongoose";

@Injectable()
export class RegistrationService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async findOneByName(username: string): Promise<User | undefined> {
        return this.userModel.findOne({username: username});
    }

    async findOneByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({email: email});
    }

    async findOneBySpotifyId(spotifyLink: string): Promise<User | undefined> {
        return this.userModel.findOne({spotifyLink: spotifyLink});
    }
}

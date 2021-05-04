import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {Model} from "mongoose";
import {UpdateUserDto} from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    private users = []

    async getAll(): Promise<User[]>{
        return this.userModel.find().exec();
    }

    async getById(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    async create(userDto: CreateUserDto){
        const newUser = new this.userModel(userDto);
        return newUser.save();
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id)
    }

    async update(id: string, userDto: UpdateUserDto): Promise<User>{
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({username: username});
    }
}

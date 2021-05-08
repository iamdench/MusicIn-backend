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

    async updateLikesMe(idLikedBy: string, idLikedTo: string ): Promise<any>{
        await this.userModel.findOneAndUpdate({_id: idLikedBy}, {$push: {iLiked: idLikedTo}})
        await this.userModel.findOneAndUpdate({_id: idLikedTo}, {$push: {likedMe: idLikedBy}, $inc: {myLikes: 1}})
    }

    async udpateDislikesMe(idDislikedBy: string, idDislikedTo: string ): Promise<any>{
        await this.userModel.findOneAndUpdate({_id: idDislikedBy}, {$pop: {iLiked: 1}})
        await this.userModel.findOneAndUpdate({_id: idDislikedTo}, {$pop: {likedMe: 1}, $inc: {myLikes: -1}})
    }
}

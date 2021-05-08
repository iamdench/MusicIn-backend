import {Controller, Delete, Get, Param, Post, Put, Body, UseGuards, Request} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";
import {JwtAuthGuard} from "./auth/guards/jwt-auth.guard";
import {LocalAuthGuard} from "./auth/guards/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {LikeUserDto} from "./dto/like-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    getAll(): Promise<User[]> {
      return this.usersService.getAll()
    }

    @Get(':id')
    getOneById(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id)
    }

    @Get(':username')
    getOneByName(@Param('username') username: string): Promise<User>{
        return this.usersService.findOne(username);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    // ikeByUserDto: LikeUserDto

    @Post('like')
    like(@Request() req, @Body() likeUserDto: LikeUserDto): Promise<void> {
        return this.usersService.updateLikesMe(likeUserDto.user_liker_id, likeUserDto.user_liked_id)
    }

    @Post('dislike')
    dislike(@Request() req, @Body() likeUserDto: LikeUserDto): Promise<void> {
        return this.usersService.udpateDislikesMe(likeUserDto.user_liker_id, likeUserDto.user_liked_id)
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<User> {
        return this.usersService.remove(id);
    }

    @Put(':id')
    update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }

}

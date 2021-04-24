import {Controller, Delete, Get, Param, Post, Put, Body} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {UsersService} from "./users.service";
import {User} from "./schemas/user.schema";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    getAll(): Promise<User[]> {
      return this.usersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<User> {
    return this.usersService.getById(id)
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
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

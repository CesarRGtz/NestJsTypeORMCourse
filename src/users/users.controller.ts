import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserDTO } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDTO) {
        return this.userService.createUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDTO) {
        return this.userService.updateUser(id, user);
    }

    @Post(':id/profile')
    createProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() profile: CreateProfileDto
    ) {
        return this.userService.createProfile(id, profile);
    }
}

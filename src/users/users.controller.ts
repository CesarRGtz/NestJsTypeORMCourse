import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService) {}
    
    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser : CreateUserDTO){
        return this.userService.createUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id : number) {
        return this.userService.deleteUser(id);
    }

}

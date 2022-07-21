import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor (private userService: UserService){}

    @Get('test')
    check(){
        return 'test';
    }

    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
         return await this.userService.create(createUserDto);
    }
}
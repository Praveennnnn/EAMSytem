import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }
    @Post('create-user')
    async registerUser(@Body()payload:any) {
        return await this.userService.createUser(payload);
    }
    @Post('login-user')
    async loginUser(@Body() body: { email: string; password: string }) {
        return await this.userService.loginUser(body);
    }
}

import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class RegisterDto {
    @ApiProperty({ example: 'admin' })
    'username': string;

    @ApiProperty({ example: 'employee' })
    'role': string;

    @ApiProperty()
    'password': string;

    @IsOptional()
    @ApiProperty()
    'email': string;
}
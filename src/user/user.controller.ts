import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/create.user.dto';
@Controller('users')
export class UserController {


     constructor(private readonly userService:UserService){}
  

     @Get()
     async getAllUser(){
       const users = await this.userService.getAll()
       users.forEach(user => {
         delete user.password
       });
       return users
     }

     @Get(':id')
     async getOneUser(@Param('id') id:number){
       const users = await this.userService.getOne(id)
       delete users.password
       return users
     }

     @Post()
     async createUser(@Body() dto:UserDTO){
         const user = await  this.userService.createUser(dto)
         return {user}
     }


     

}

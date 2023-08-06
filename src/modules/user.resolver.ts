import { Resolver, Query, Mutation, Arg } from "type-graphql";
import  {User, RegisterUserInput} from "./user.dto";
import {v4 as uuid} from "uuid"

@Resolver() 
export  class UserResolver {

     @Query(()=> String) 
     hello() {
         return "Hello World!"
     } 

     @Mutation(()=> User)
     register(@Arg('input') input: RegisterUserInput)  {
         
         let user = new User()
         user.id = uuid()
         user.email = input.email
         user.password = input.password
         user.firstName = input.firstName
         user.lastName  = input.lastName
    
         return user
     }
    
   
}

 


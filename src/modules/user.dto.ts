import { Field, ID, ObjectType, InputType } from "type-graphql";
import { Length, IsEmail } from "class-validator";

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => ID, { nullable: false })
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}

@InputType()
export class RegisterUserInput {
  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @Length(6, 56)
  password: string;
}

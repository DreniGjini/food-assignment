import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSmartSearchInput {
  @Field(() => Int, { description: 'Search value' })
  @IsString()
  @IsNotEmpty()
  exampleField: number;
}

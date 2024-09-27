import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class DishType {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Brand {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class Diet {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class SmartSearch {
  @Field(() => City, { nullable: true })
  city?: City;

  @Field(() => DishType, { nullable: true })
  dishType?: DishType;

  @Field(() => Brand, { nullable: true })
  brand?: Brand;

  @Field(() => Diet, { nullable: true })
  diet?: Diet;
}

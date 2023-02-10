import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({
      description: 'Name of product to create',
    })
    name: string;

    @ApiProperty({
      description: 'Description of product',
    })
    description: string;
    
    @ApiProperty({
      description: 'Price of product',
    })
    price: number;
  }
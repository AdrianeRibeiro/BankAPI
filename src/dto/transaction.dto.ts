import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class TransactionDto {
  @IsString()
  @IsNotEmpty()
  pix_key_key: string;

  @IsString()
  @IsNotEmpty()
  pix_key_kind: string;

  @IsString()
  @IsOptional()
  description: string = null;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @IsNotEmpty()
  readonly amount: number;
}

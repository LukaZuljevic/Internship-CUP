import { IsString, IsEnum } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RuleType } from '@prisma/client';

export class CreateRuleDto {
  @ApiProperty({
    description: 'The name of the rule',
    example: 'No Fishing',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The type of rule',
    enum: RuleType,
    example: RuleType.WARNING,
  })
  @IsEnum(RuleType)
  type: RuleType;

  @ApiProperty({
    description: 'Description of the rule',
    example: 'Protection of marine wildlife in this area',
  })
  @IsString()
  description: string;
}

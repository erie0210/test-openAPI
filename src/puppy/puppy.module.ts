import { Module } from '@nestjs/common';
import { PuppyController } from './puppy.controller';
import { PuppyService } from './puppy.service';

@Module({
  controllers: [PuppyController],
  providers: [PuppyService]
})
export class PuppyModule {}

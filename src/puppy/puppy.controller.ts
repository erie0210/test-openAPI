import {Controller, Get, Param} from '@nestjs/common';
import {Puppy} from "./entity/puppy.entity";
import {PuppyService} from "./puppy.service";

@Controller('puppy')
export class PuppyController {
    constructor(private readonly puppyService: PuppyService) {
    }

    @Get('/')
    getAllPuppy():Puppy[] {
        return this.puppyService.getAll();
    }
    @Get('/:id')
    getOnePuppy(@Param('id') id :number):Puppy {
        return this.puppyService.getOne(id);
    }
}

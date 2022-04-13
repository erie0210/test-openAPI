import { Injectable, NotFoundException } from '@nestjs/common';
import { Puppy } from './entity/puppy.entity';

@Injectable()
export class PuppyService {
  private puppies: Puppy[] = [
    {
      id: 1,
      breed: 'pome',
      age: 3,
      gender: 'male',
    },
    {
      id: 2,
      breed: 'chiwawa',
      age: 5,
      gender: 'female',
    },
    {
      id: 3,
      breed: 'puddle',
      age: 4,
      gender: 'male',
    },
  ];

  getAll(): Puppy[] {
    return this.puppies;
  }

  getOne(id: number): Puppy {
    const targetPuppy = this.puppies.find((p: Puppy) => p.id === id);
    if (!targetPuppy) {
      throw new NotFoundException(`${id} 강아지가 없습니다.`);
    }
    return targetPuppy;
  }
}

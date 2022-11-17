import { Injectable } from '@nestjs/common';

import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  async findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  async findAll(query: ListAllEntities) {
    return {
      message: `This action returns all cats (limit: ${query.limit} items)`,
      query,
    };
  }

  async create(body: CreateCatDto) {
    return { message: 'This action adds a new cat', body };
  }

  async update(id: number, body: UpdateCatDto) {
    return { message: `This action updates a #${id} cat`, body };
  }
  async delete(id: number) {
    return `This action removes a #${id} cat`;
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities) {
    return this.catsService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.catsService.delete(id);
  }
}

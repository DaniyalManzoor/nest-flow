import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { CatsService } from './cats.service';
import { Roles } from '../decorator/roles.decorator';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto/cats.dto';
import { Role } from 'src/decorator/role.enum';

@Roles(Role.USER)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles(Role.ADMIN)
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

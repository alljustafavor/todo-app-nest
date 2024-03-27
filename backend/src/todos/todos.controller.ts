import { TodosService } from './todos.service';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  findTodos() {
    return this.todosService.find();
  }

  @Get(':id')
  findTodoByID(@Param('id') id: string) {
    return this.todosService.findOne(parseInt(id));
  }

  @Post()
  createTodo(@Body() body: any) {
    return this.todosService.create(body);
  }

  @Patch(':id')
  updateTodoStatus(@Param('id') id: string) {
    return this.todosService.update(parseInt(id));
  }
}

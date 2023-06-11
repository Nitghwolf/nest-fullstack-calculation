import { AuthorGuard } from './../guard/author.guard';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Req, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createTransactionDto: CreateTransactionDto, @Req() req) {
    return this.transactionService.create(createTransactionDto, +req.user.userId);
  }

  @Get(':type/find')
  @UseGuards(JwtAuthGuard)
  findAllByType(@Req() req, @Param('type') type: string){
    return this.transactionService.findAllByType(+req.user.userId, type);
  }

  @Get('pagination')
  @UseGuards(JwtAuthGuard)
  findAllWithPagination(@Req() req, @Query('page') page: number, @Query('limit') limit: number,) {
    return this.transactionService.findAllWithPagination(+req.user.userId, +page, +limit);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.transactionService.findAll(+req.user.userId);
  }

  @Get(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':type/:id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}

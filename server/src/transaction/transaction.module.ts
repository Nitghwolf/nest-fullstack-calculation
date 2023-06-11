import { CategoryService } from './../category/category.service';
import { Category } from './../category/entities/category.entity';
import { Transaction } from './entities/transaction.entity';
import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Category])],
  controllers: [TransactionController],
  providers: [TransactionService, CategoryService]
})
export class TransactionModule {}

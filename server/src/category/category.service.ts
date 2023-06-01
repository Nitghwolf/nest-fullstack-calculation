import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';
import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto, id: number) {
		const isExist = await this.categoryRepository.findBy({
			user: { id },
			title: createCategoryDto.title,
		});

		if (isExist.length) throw new BadRequestException('This category exist');

		const newCategory = {
			title: createCategoryDto.title,
			user: { id },
		};

		return await this.categoryRepository.save(newCategory);
	}

	async findAll(id: number) {
		return await this.categoryRepository.find({
			where: {
				user: { id },
			},
			relations: {
				transactions: true,
			},
		});
	}

	async findOne(id: number) {
		const isExist = await this.categoryRepository.findOne({
			where: {
				id,
			},
			relations: {
				user: true,
				transactions: true,
			},
		});

		if (!isExist) throw new NotFoundException('Dont exist this category');

		return isExist;
	}

	async update(id: number, updateCategoryDto: UpdateCategoryDto) {
		const isExist = await this.categoryRepository.findOne({
			where: {
				id,
			},
			relations: {
				user: true,
				transactions: true,
			},
		});

		if (!isExist) throw new NotFoundException('Dont exist this category');

		return await this.categoryRepository.update(id, updateCategoryDto);
	}

	async remove(id: number) {
		const isExist = await this.categoryRepository.findOne({
			where: {
				id,
			},
		});

		if (!isExist) throw new NotFoundException('Dont exist this category');

		return await this.categoryRepository.delete(id);
	}
}

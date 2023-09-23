import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostEntity } from '../entities/post.entity';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class PostsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    const { authorEmail, ...restPost } = createPostDto;

    const user = await this.prisma.user.findUnique({
      where: { email: authorEmail },
    });

    if (!user) throw new NotFoundError('Author not found.');

    const data: Prisma.PostCreateInput = {
      ...restPost,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    };

    return this.prisma.post.create({ data });
  }

  async findAll(): Promise<PostEntity[]> {
    return this.prisma.post.findMany({
      include: {
        // author: true,
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<PostEntity> {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const { authorEmail, ...restPost } = updatePostDto;

    if (!authorEmail) {
      return this.prisma.post.update({
        where: { id },
        data: updatePostDto,
      });
    }

    const user = await this.prisma.user.findUnique({
      where: { email: authorEmail },
    });

    if (!user) throw new NotFoundError('Author not found.');

    const data: Prisma.PostUpdateInput = {
      ...restPost,
      author: {
        connect: {
          email: authorEmail,
        },
      },
    };

    return this.prisma.post.update({ where: { id }, data });
  }

  async remove(id: number): Promise<PostEntity> {
    return this.prisma.post.delete({ where: { id } });
  }
}

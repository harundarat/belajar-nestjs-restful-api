import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { UserResponse } from 'src/model/user.model';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: { username: 'test' },
    });
  }

  async createUser() {
    await this.prismaService.user.create({
      data: {
        username: 'test',
        name: 'test',
        password: await bcrypt.hash('test', 10),
        token: 'test',
      },
    });
  }

  async getUser(): Promise<UserResponse> {
    const user = await this.prismaService.user.findUnique({
      where: { username: 'test' },
    });

    return {
      username: user!.username,
      name: user!.name,
      token: user!.token!,
    };
  }
}

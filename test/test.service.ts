import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { Contact, User } from '@prisma/client';
import { UserResponse } from 'src/model/user.model';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async deleteUser() {
    await this.deleteContact();
    await this.prismaService.user.deleteMany({
      where: { username: 'test' },
    });
  }

  async deleteContact() {
    await this.prismaService.contact.deleteMany({
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

  async getContact(): Promise<Contact> {
    const contact = await this.prismaService.contact.findFirst({
      where: { username: 'test' },
    });

    if (!contact) {
      throw new NotFoundException('Contact not found');
    }

    return contact;
  }

  async createContact() {
    await this.prismaService.contact.create({
      data: {
        first_name: 'test',
        last_name: 'test',
        email: 'test@example.com',
        phone: '9999',
        username: 'test',
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

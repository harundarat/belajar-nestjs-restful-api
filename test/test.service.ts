import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import * as bcrypt from 'bcrypt';
import { Address, Contact, User } from '@prisma/client';
import { UserResponse } from 'src/model/user.model';

@Injectable()
export class TestService {
  async deleteAddress() {
    await this.prismaService.address.deleteMany({
      where: {
        contact: {
          username: 'test',
        },
      },
    });
  }
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

  async createAddress() {
    const contact = await this.getContact();
    await this.prismaService.address.create({
      data: {
        contact_id: contact.id,
        street: 'jalan test',
        city: 'kota test',
        province: 'provinsi test',
        country: 'negara test',
        postal_code: '1111',
      },
    });
  }

  async getAddress(): Promise<Address> {
    const address = await this.prismaService.address.findFirst({
      where: {
        contact: {
          username: 'test',
        },
      },
    });

    if (!address) throw new NotFoundException('Address not found');

    return address;
  }
}

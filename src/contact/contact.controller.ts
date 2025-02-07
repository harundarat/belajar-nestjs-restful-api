import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Auth } from 'src/common/auth.decorator';
import { User } from '@prisma/client';
import {
  ContactResponse,
  CreateContactRequest,
  SearchContactRequest,
  UpdateContactRequest,
} from 'src/model/contact.model';
import { WebResponse } from 'src/model/web.model';
import { PrismaService } from 'src/common/prisma.service';

@Controller('/api/contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @HttpCode(200)
  async create(
    @Auth() user: User,
    @Body() request: CreateContactRequest,
  ): Promise<WebResponse<ContactResponse>> {
    const result = await this.contactService.create(user, request);

    return {
      data: result,
    };
  }

  @Get('/:contactId')
  @HttpCode(200)
  async get(
    @Auth() user: User,
    @Param('contactId', ParseIntPipe) contactId: number,
  ): Promise<WebResponse<ContactResponse>> {
    const result = await this.contactService.get(user, contactId);

    return {
      data: result,
    };
  }

  @Put('/:contactId')
  @HttpCode(200)
  async update(
    @Auth() user: User,
    @Param('contactId', ParseIntPipe) contactId: number,
    @Body() request: UpdateContactRequest,
  ): Promise<WebResponse<ContactResponse>> {
    request.id = contactId;
    const contact = await this.contactService.update(user, request);

    return {
      data: contact,
    };
  }

  @Delete('/:contactId')
  @HttpCode(200)
  async delete(
    @Auth() user: User,
    @Param('contactId', ParseIntPipe) contactId: number,
  ): Promise<WebResponse<boolean>> {
    await this.contactService.delete(user, contactId);

    return {
      data: true,
    };
  }

  @Get()
  @HttpCode(200)
  async search(
    @Auth() user: User,
    @Query('name') name?: string,
    @Query('email') email?: string,
    @Query('phone') phone?: string,
    @Query('page', new ParseIntPipe({ optional: true })) page?: number,
    @Query('size', new ParseIntPipe({ optional: true })) size?: number,
  ): Promise<WebResponse<ContactResponse[]>> {
    const request: SearchContactRequest = {
      name,
      email,
      phone,
      page: page || 1,
      size: size || 10,
    };
    return this.contactService.search(user, request);
  }
}

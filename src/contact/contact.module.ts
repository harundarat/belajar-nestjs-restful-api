import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  controllers: [ContactController],
  exports: [ContactService],
  providers: [ContactService],
})
export class ContactModule {}

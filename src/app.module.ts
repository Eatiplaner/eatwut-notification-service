import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SendgridService } from './services/sendgrid/sendgrid.service';

@Module({
  controllers: [AppController],
  providers: [SendgridService],
})
export class AppModule {}

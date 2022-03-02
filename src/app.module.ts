import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HubspotContactsModule } from './hubspot-contacts/hubspot-contacts.module';

@Module({
  imports: [HubspotContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

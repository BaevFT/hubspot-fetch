import { Module } from '@nestjs/common';
import { HubspotContactsService } from './hubspot-contacts.service';
import { HubspotContactsController } from './hubspot-contacts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [HubspotContactsController],
  providers: [HubspotContactsService],
  exports: [HubspotContactsService],
})
export class HubspotContactsModule {}

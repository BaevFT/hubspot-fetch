import { Controller, Get, Param } from '@nestjs/common';
import { HubspotContactsService } from './hubspot-contacts.service';

@Controller('hubspot-contacts')
export class HubspotContactsController {
  constructor(
    private readonly hubspotContactsService: HubspotContactsService,
  ) {}

  @Get(':email')
  getContactByEmail(@Param('email') email: string) {
    const response = this.hubspotContactsService.getContactByEmail(email);
    return response;
  }
}

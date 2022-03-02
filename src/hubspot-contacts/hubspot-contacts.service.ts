import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, of } from 'rxjs';

@Injectable()
export class HubspotContactsService {
  constructor(private readonly httpService: HttpService) {}
  getContactByEmail(email: string) {
    const address = `https://api.hubapi.com/contacts/v1/contact/email/${email}/profile`;
    const hapikey = 'demo';
    const response = this.httpService.get(address, { params: { hapikey } });
    return response.pipe(
      map((res) => res.data),
      catchError((error) => of(error)),
    );
  }
}

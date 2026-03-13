import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Applications, CustomersInfo, NotificationSettings, UserInfo } from './data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly id: number = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  private readonly http = inject(HttpClient);

  fetchLoggedUser() {
    return this.http.get<UserInfo>(`http://localhost:9000/users/${this.id}`);
  }

  fetchNotificationSettings() {
    return this.http.get<NotificationSettings>(`http://localhost:9000/users/${this.id}/settings`);
  }

  fetchIntegrations() {
    return this.http.get<Applications[]>(`http://localhost:9000/integrations`);
  }

  fetchCustomers() {
    return this.http.get<CustomersInfo[]>(`http://localhost:9000/customers`);
  }
}

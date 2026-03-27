import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { UserInfo, NotificationSetting, CustomersInfo } from '../shared/data';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:9000';

  fetchLoggedUser(id: number) {
    return this.http.get<UserInfo>(`${this.apiUrl}/users/${id}`);
  }

  fetchNotificationSettings(id: number) {
    return this.http.get<NotificationSetting>(`${this.apiUrl}/users/${id}/settings`);
  }

  fetchCustomers() {
    return this.http.get<CustomersInfo[]>(`${this.apiUrl}/customers`);
  }
}

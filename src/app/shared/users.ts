import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Application,
  CustomersInfo,
  LatestOrder,
  LatestProduct,
  NotificationSetting,
  UserInfo,
} from './data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly id: number = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:9000';

  fetchLoggedUser() {
    return this.http.get<UserInfo>(`${this.apiUrl}/users/${this.id}`);
  }

  fetchNotificationSettings() {
    return this.http.get<NotificationSetting>(`${this.apiUrl}/users/${this.id}/settings`);
  }

  fetchIntegrations(): [Observable<number[]>, Observable<Application[]>] {
    return [
      this.http.get<number[]>(`${this.apiUrl}/users/${this.id}/integrations`),
      this.http.get<Application[]>(`${this.apiUrl}/integrations`),
    ];
  }

  fetchCustomers() {
    return this.http.get<CustomersInfo[]>(`${this.apiUrl}/customers`);
  }

  fetchOrders(limit: number) {
    return this.http.get<LatestOrder[]>(`${this.apiUrl}/orders?limit=${limit}`);
  }

  fetchProducts(limit: number) {
    return this.http.get<LatestProduct[]>(`${this.apiUrl}/products?limit=${limit}`);
  }
}

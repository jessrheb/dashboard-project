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
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:9000';

  fetchLoggedUser(id: number) {
    return this.http.get<UserInfo>(`${this.apiUrl}/users/${id}`);
  }

  fetchNotificationSettings(id: number) {
    return this.http.get<NotificationSetting>(`${this.apiUrl}/users/${id}/settings`);
  }

  fetchIntegrations(): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/integrations`);
  }

  fetchIntegrationsByUser(id: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/users/${id}/integrations`);
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

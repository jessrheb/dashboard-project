import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { UserInfo } from './data';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly http = inject(HttpClient);

  fetchLoggedUser(id: number) {
    return this.http.get<UserInfo>(`http://localhost:9000/users/${id}`);
  }
}

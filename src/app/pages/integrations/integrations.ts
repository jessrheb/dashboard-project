import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Applications } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-integrations',
  standalone: false,
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations implements OnInit {
  integrations$!: Observable<Applications[]>;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.integrations$ = this.usersService.fetchIntegrations();
  }
}

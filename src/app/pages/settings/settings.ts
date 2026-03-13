import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NotificationSettings } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  notificationSettings$!: Observable<NotificationSettings>;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.notificationSettings$ = this.usersService.fetchNotificationSettings();
  }
}

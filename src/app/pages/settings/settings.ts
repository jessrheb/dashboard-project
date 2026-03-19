import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NotificationSetting } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  notificationSettings$!: Observable<NotificationSetting>;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.notificationSettings$ = this.usersService.fetchNotificationSettings();
  }
}

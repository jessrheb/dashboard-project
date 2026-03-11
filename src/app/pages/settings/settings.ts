import { Component, OnInit } from '@angular/core';
import { Data, NotificationSettings } from '../../shared/data';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  providers: [Data],
})
export class Settings implements OnInit {
  notificationSettings!: NotificationSettings;

  constructor(private readonly data: Data) {}

  ngOnInit(): void {
    this.notificationSettings = this.data.notificationSettings;
  }
}

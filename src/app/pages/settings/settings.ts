import { Component, OnInit } from '@angular/core';
import { AccountType, Data, NotificationSettings } from '../../shared/data';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css',
  providers: [Data],
})
export class Settings implements OnInit {
  accounts: Array<AccountType> = [];

  get notificationSettings(): NotificationSettings {
    return this.accounts[0].notificationSettings;
  }

  constructor(private readonly data: Data) {}

  ngOnInit(): void {
    this.accounts.push(this.data.sampleAccount);
  }
}

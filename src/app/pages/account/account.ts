import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, SubscriptSizing } from '@angular/material/form-field';
import { Observable } from 'rxjs';

import { UserInfo, Data } from '../../shared/data';
import { UsersService } from '../../services/users';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  floatLabel = new FormControl('auto' as FloatLabelType);
  subscriptSizing: SubscriptSizing | null = null;

  userId: number = 0;
  loggedAccount$: Observable<UserInfo> | null = null;

  states: Array<string> = [];
  selectedValue: string = '';

  constructor(
    private readonly data: Data,
    private readonly usersService: UsersService,
  ) {
    this.userId = this.data.id;
  }

  ngOnInit(): void {
    this.loggedAccount$ = this.usersService.fetchLoggedUser(this.userId);
    this.states = this.data.states;
  }
}

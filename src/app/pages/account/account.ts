import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, SubscriptSizing } from '@angular/material/form-field';
import { Observable } from 'rxjs';

import { UserInfo, Data } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account implements OnInit {
  floatLabel = new FormControl('auto' as FloatLabelType);
  subscriptSizing!: SubscriptSizing;

  loggedAccount$!: Observable<UserInfo>;

  states: Array<string> = [];
  selectedValue!: string;

  constructor(
    private readonly data: Data,
    private readonly usersService: UsersService,
  ) {}

  ngOnInit(): void {
    this.loggedAccount$ = this.usersService.fetchLoggedUser();
    this.states = this.data.states;
  }
}

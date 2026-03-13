import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';

import { UserInfo } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger = new MatMenuTrigger();

  loggedAccount$!: Observable<UserInfo>;

  constructor(private readonly usersService: UsersService) {}

  onClickingAvatar() {
    this.trigger.openMenu();
  }

  ngOnInit(): void {
    this.loggedAccount$ = this.usersService.fetchLoggedUser();
  }
}

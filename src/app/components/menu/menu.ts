import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { AccountType, Data } from '../../shared/data';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger = new MatMenuTrigger();

  constructor(private readonly data: Data) {}

  loggedAccount!: AccountType;

  onClickingAvatar() {
    this.trigger.openMenu();
  }

  ngOnInit(): void {
    this.loggedAccount = this.data.sampleAccount;
  }
}

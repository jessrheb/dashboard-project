import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @ViewChild(MatMenuTrigger)
  trigger: MatMenuTrigger = new MatMenuTrigger();

  onClickingAvatar() {
    this.trigger.openMenu();
  }
}

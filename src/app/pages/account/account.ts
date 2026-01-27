import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Data } from '../../data';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.css',
  providers: [Data],
})
export class Account implements OnInit {
  floatLabel = new FormControl('auto' as FloatLabelType);

  accounts: {
    firstName: string;
    lastName: string;
    avatar: string;
    alt: string;
    location: string;
    timezone: string;
    email: string;
  }[] = [];

  states: Array<string> = [];

  constructor(private readonly data: Data) {}

  ngOnInit(): void {
    this.accounts = this.data.accounts;
    this.states = this.data.states;
  }
}

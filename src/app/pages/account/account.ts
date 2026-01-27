import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { AccountType, Data } from '../../shared/data';

@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.css',
  providers: [Data],
})
export class Account implements OnInit {
  floatLabel = new FormControl('auto' as FloatLabelType);

  accounts: Array<AccountType> = [];

  states: Array<string> = [];

  constructor(private readonly data: Data) {}

  ngOnInit(): void {
    this.accounts.push(this.data.sampleAccount);
    this.states = this.data.states;
  }
}

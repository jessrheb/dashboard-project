import { Component, OnInit } from '@angular/core';

import { Applications, Data } from '../../shared/data';

@Component({
  selector: 'app-integrations',
  standalone: false,
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations implements OnInit {
  integrationApps: Array<Applications> = [];

  get integrationApp(): Array<Applications> {
    return this.integrationApps;
  }

  constructor(private readonly data: Data) {}

  ngOnInit(): void {
    this.integrationApps = this.data.integrationApps;
  }
}

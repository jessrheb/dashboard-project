import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  standalone: false,
  templateUrl: './page-heading.html',
  styleUrl: './page-heading.css',
})
export class PageHeading {
  @Input() pageTitle!: string;
  @Input() simpleHeading: boolean = true;
}

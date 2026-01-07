import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterContentChecked {
  @ViewChild(MatSidenav, { static: true })
  sidenav!: MatSidenav;

  constructor(private readonly observer: BreakpointObserver) {}

  onClickHandler() {
    console.log(this.sidenav);
  }

  ngAfterContentChecked() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, map, Observable } from 'rxjs';

import { Application } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-integrations',
  standalone: false,
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations implements OnInit, AfterViewInit {
  userApplications!: number[];
  integrations$!: Observable<Application[]>;
  dataSource: MatTableDataSource<Application> = new MatTableDataSource<Application>([]);
  totalApplications = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    forkJoin(this.usersService.fetchIntegrations())
      .pipe(
        map(([ids, integrations]) => {
          this.userApplications = ids;
          this.totalApplications = this.userApplications.length;
          this.dataSource.data = integrations.filter((integration) =>
            ids.includes(+integration.id),
          );
        }),
      )
      .subscribe();
    this.integrations$ = this.dataSource.connect();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

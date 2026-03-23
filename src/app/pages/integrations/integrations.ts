import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, map, Observable, Subject, takeUntil } from 'rxjs';

import { Application } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-integrations',
  standalone: false,
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations implements OnInit, OnDestroy, AfterViewInit {
  private readonly destroy$ = new Subject<void>();
  integrations$!: Observable<Application[]>;

  userApplications!: number[];
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
        takeUntil(this.destroy$),
      )
      .subscribe();
    this.integrations$ = this.dataSource.connect();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

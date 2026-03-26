import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, Subject, takeUntil } from 'rxjs';

import { LatestOrder, LatestProduct, OverviewInfo, SalesInfo } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  latestOrders$: Observable<LatestOrder[]> | null = null;
  latestProducts$: Observable<LatestProduct[]> | null = null;

  overviewInfo: OverviewInfo = {
    budget: {
      current: 0,
      lastMonth: 0,
    },
    totalCustomers: {
      current: 0,
      lastMonth: 0,
    },
    taskProgress: 0,
    totalProfit: 0,
    trafficSource: {
      desktop: 0,
      tablet: 0,
      phone: 0,
    },
  };

  salesInfo: SalesInfo = {
    currentYear: [],
    lastYear: [],
  };

  columns = [
    {
      columnDef: 'order',
      header: 'Order',
      cell: (element: LatestOrder) => `${element.id}`,
    },
    {
      columnDef: 'customer',
      header: 'Customer',
      cell: (element: LatestOrder) => `${element.customer}`,
    },
    {
      columnDef: 'dateOrdered',
      header: 'Date',
      cell: (element: LatestOrder) => `${element.orderDate}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: LatestOrder) => `${element.status}`,
    },
  ];

  dataSource: MatTableDataSource<LatestOrder> = new MatTableDataSource<LatestOrder>([]);
  displayedColumns: Array<string> = [];
  headers: Array<string> = this.columns.map((column) => column.columnDef);

  constructor(private readonly usersService: UsersService) {}

  get budget() {
    return this.overviewInfo.budget;
  }

  get totalCustomers() {
    return this.overviewInfo.totalCustomers;
  }

  get taskProgress() {
    return this.overviewInfo.taskProgress;
  }

  get totalProfit() {
    return this.overviewInfo.totalProfit;
  }

  get trafficSource() {
    return {
      desktop: this.overviewInfo.trafficSource.desktop,
      tablet: this.overviewInfo.trafficSource.tablet,
      phone: this.overviewInfo.trafficSource.phone,
    };
  }

  valueFormatter(value: number) {
    return value > 999 ? Math.round(value / 100) / 10 + 'k' : value.toString();
  }

  percentChange(a: number, b: number) {
    let percent;
    if (b !== 0) {
      if (a !== 0) {
        percent = ((b - a) / a) * 100;
      } else {
        percent = b * 100;
      }
    } else {
      percent = -a * 100;
    }
    return Math.floor(percent);
  }

  ngOnInit(): void {
    this.usersService
      .fetchOverviewInfo()
      .pipe(
        map((overview: OverviewInfo) => {
          this.overviewInfo = overview;
          this.overviewInfo.taskProgress = Math.floor(this.overviewInfo.taskProgress);
          this.overviewInfo.trafficSource = {
            desktop: Math.floor(this.overviewInfo.trafficSource.desktop),
            tablet: Math.floor(this.overviewInfo.trafficSource.tablet),
            phone: Math.floor(this.overviewInfo.trafficSource.phone),
          };
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();

    this.usersService
      .fetchOrders(6)
      .pipe(
        map((orders: LatestOrder[]) => (this.dataSource.data = orders)),
        takeUntil(this.destroy$),
      )
      .subscribe();

    this.usersService
      .fetchSalesInfo()
      .pipe(
        map((sales: SalesInfo) => {
          this.salesInfo = {
            currentYear: sales.currentYear.map((current) => Math.floor(current)),
            lastYear: sales.lastYear.map((last) => Math.floor(last)),
          };
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();

    this.latestProducts$ = this.usersService.fetchProducts(5);

    this.displayedColumns.push(...this.headers);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

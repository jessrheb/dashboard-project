import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';

import { Data, LatestOrder, LatestProduct, OverviewCards, TrafficSource } from '../../shared/data';
import { UsersService } from '../../shared/users';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit, OnDestroy {
  overviewData!: {
    budget: OverviewCards;
    totalCustomers: OverviewCards;
    taskProgress: OverviewCards;
    totalProfit: OverviewCards;
  };
  trafficSource!: TrafficSource;

  latestOrders$!: Observable<LatestOrder[]>;
  latestProducts$!: Observable<LatestProduct[]>;

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
  private subscription!: Subscription;

  constructor(
    private readonly data: Data,
    private readonly usersService: UsersService,
  ) {
    this.latestOrders$ = this.usersService.fetchOrders(6);
  }

  get budget() {
    return this.overviewData.budget;
  }

  get totalCustomers() {
    return this.overviewData.totalCustomers;
  }

  get taskProgress() {
    return this.overviewData.taskProgress;
  }

  get totalProfit() {
    return this.overviewData.totalProfit;
  }

  valueFormatter(value: number) {
    return value > 999 ? Math.round(value / 100) / 10 + 'k' : value.toString();
  }

  ngOnInit(): void {
    this.overviewData = {
      budget: this.data.budget,
      totalCustomers: this.data.totalCustomers,
      taskProgress: this.data.taskProgress,
      totalProfit: this.data.totalProfit,
    };
    this.trafficSource = this.data.trafficSource;

    this.subscription = this.latestOrders$.subscribe((orders) => {
      this.dataSource.data = orders;
    });

    this.latestProducts$ = this.usersService.fetchProducts(5);

    this.displayedColumns.push(...this.headers);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

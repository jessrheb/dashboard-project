import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import {
  Data,
  LatestOrders,
  LatestProducts,
  OverviewCards,
  TrafficSource,
} from '../../shared/data';

@Component({
  selector: 'app-overview',
  standalone: false,
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {
  overviewData!: {
    budget: OverviewCards;
    totalCustomers: OverviewCards;
    taskProgress: OverviewCards;
    totalProfit: OverviewCards;
  };
  trafficSource!: TrafficSource;
  latestProducts!: Array<LatestProducts>;
  latestOrders!: Array<LatestOrders>;

  columns = [
    {
      columnDef: 'order',
      header: 'Order',
      cell: (element: LatestOrders) => `${element.order}`,
    },
    {
      columnDef: 'customer',
      header: 'Customer',
      cell: (element: LatestOrders) => `${element.customer}`,
    },
    {
      columnDef: 'dateOrdered',
      header: 'Date',
      cell: (element: LatestOrders) => `${element.dateOrdered}`,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: LatestOrders) => `${element.status}`,
    },
  ];

  dataSource!: MatTableDataSource<LatestOrders>;
  displayedColumns: Array<string> = [];
  headers: Array<string> = this.columns.map((column) => column.columnDef);

  constructor(private readonly data: Data) {
    this.dataSource = new MatTableDataSource<LatestOrders>(this.data.latestOrders);
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
    this.latestProducts = this.data.latestProducts;
    this.latestOrders = this.data.latestOrders;

    this.displayedColumns.push(...this.headers);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { CustomersInfo, Data } from '../../shared/data';
@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (element: CustomersInfo) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: CustomersInfo) => `${element.name}`,
    },
    {
      columnDef: 'avatar',
      header: 'Avatar',
      cell: (element: CustomersInfo) => `${element.avatar}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: CustomersInfo) => `${element.email}`,
    },
    {
      columnDef: 'location',
      header: 'Location',
      cell: (element: CustomersInfo) => `${element.location}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: CustomersInfo) => `${element.phone}`,
    },
    {
      columnDef: 'signedup',
      header: 'Signed Up',
      cell: (element: CustomersInfo) => `${element.signedUp}`,
    },
  ];
  dataSource!: MatTableDataSource<CustomersInfo>;
  selection = new SelectionModel<CustomersInfo>(true, []);

  displayedColumns: Array<string> = ['select'];
  headers: Array<string> = this.columns
    .map((column) => column.columnDef)
    .filter((header) => header !== 'id' && header !== 'avatar');

  constructor(private readonly data: Data) {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: CustomersInfo): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CustomersInfo>(this.data.customersInfo);
    this.displayedColumns.push(...this.headers);
  }
}

import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Sidebar } from './components/sidebar/sidebar';
import { Data } from './shared/data';
import { Account } from './pages/account/account';
import { Customers } from './pages/customers/customers';
import { Integrations } from './pages/integrations/integrations';
import { MaterialModule } from '../material-module';
import { Overview } from './pages/overview/overview';
import { Settings } from './pages/settings/settings';
import { SearchBox } from './components/search-box/search-box';
import { PageHeading } from './components/page-heading/page-heading';
import { BarChart } from './shared/charts/bar-chart/bar-chart';
import { DonutChart } from './shared/charts/donut-chart/donut-chart';

@NgModule({
  declarations: [
    App,
    Menu,
    Header,
    Sidebar,
    Overview,
    Customers,
    Integrations,
    Settings,
    Account,
    SearchBox,
    PageHeading,
    BarChart,
    DonutChart,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    NgApexchartsModule,
    NgxPhosphorIconsModule,
    RouterOutlet,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    Data,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { subscriptSizing: 'dynamic' } },
  ],
  bootstrap: [App],
})
export class AppModule {}

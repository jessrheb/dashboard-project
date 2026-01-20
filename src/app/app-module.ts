import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { MaterialModule } from '../material-module';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Sidebar } from './components/sidebar/sidebar';
import { Account } from './pages/account/account';
import { Customers } from './pages/customers/customers';
import { Integrations } from './pages/integrations/integrations';
import { Overview } from './pages/overview/overview';
import { Settings } from './pages/settings/settings';

@NgModule({
  declarations: [App, Menu, Header, Sidebar, Overview, Customers, Integrations, Settings, Account],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    NgxPhosphorIconsModule,
    RouterOutlet,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

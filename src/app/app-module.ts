import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPhosphorIconsModule } from 'ngx-phosphor-icons';
import { MaterialModule } from '../material-module';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Account } from './content/account/account';
import { Content } from './content/content';
import { Customers } from './content/customers/customers';
import { Integrations } from './content/integrations/integrations';
import { Overview } from './content/overview/overview';
import { Settings } from './content/settings/settings';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Sidebar } from './sidebar/sidebar';

@NgModule({
  declarations: [
    App,
    Menu,
    Header,
    Content,
    Sidebar,
    Overview,
    Customers,
    Integrations,
    Settings,
    Account,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, NgxPhosphorIconsModule, MatIconModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

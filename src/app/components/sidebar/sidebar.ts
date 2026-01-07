import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  pagesLinks = [
    {
      name: 'Overview',
      route: '/overview',
      icon: 'ph-light:chart-pie',
      iconActive: 'ph-fill:chart-pie',
    },
    {
      name: 'Customers',
      route: '/customers',
      icon: 'ph-light:users',
      iconActive: 'ph-fill:users',
    },
    {
      name: 'Integrations',
      route: '/integrations',
      icon: 'ph-light:plugs-connected',
      iconActive: 'ph-fill:plugs-connected',
    },
    {
      name: 'Settings',
      route: '/settings',
      icon: 'ph-light:gear-six',
      iconActive: 'ph-fill:gear-six',
    },
    {
      name: 'Account',
      route: '/account',
      icon: 'ph-light:user',
      iconActive: 'ph-fill:user',
    },
  ];
}

import { NgModule } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatIconButton } from '@angular/material/button';

@NgModule({
  imports: [
    MatSidenavModule,
    MatDivider,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatToolbar,
  ],
  exports: [
    MatSidenavModule,
    MatDivider,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatToolbar,
  ],
})
export class MaterialModule {}

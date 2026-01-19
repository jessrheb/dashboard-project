import { NgModule } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,

    MatCardModule,
    MatDivider,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatSidenavModule,
    MatToolbar,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatSidenavModule,
    MatToolbar,
  ],
})
export class MaterialModule {}

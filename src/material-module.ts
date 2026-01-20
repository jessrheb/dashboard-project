import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatSelectModule,
    MatSidenavModule,
    MatToolbar,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    MatIconModule,
    MatMenuModule,
    MatNavList,
    MatSelectModule,
    MatSidenavModule,
    MatToolbar,
    ReactiveFormsModule,
  ],
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';

@NgModule({
  imports: [MatDrawerContainer, MatDrawer, MatDrawerContent, MatDivider],
  exports: [MatDrawerContainer, MatDrawer, MatDrawerContent, MatDivider],
})
export class MaterialModule {}

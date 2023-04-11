import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MatTableModule } from '@angular/material/table';
import { ContextMenuDirective } from '../shared/context-menu.directive';
import { HomePageRoutingeModule } from './home-page-routinge.module';
@NgModule({
  declarations: [HomePageComponent,ContextMenuDirective],
  imports: [CommonModule, MatTableModule,HomePageRoutingeModule],
  
})
export class HomeModule {}

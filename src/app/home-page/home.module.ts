import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MatTableModule } from '@angular/material/table';
import { HomePageRoutingeModule } from './home-page-routinge.module';
import { ContextMenuDirective } from '../core/directives/context-menu.directive';
@NgModule({
  declarations: [HomePageComponent,ContextMenuDirective],
  imports: [CommonModule, MatTableModule,HomePageRoutingeModule],
  
})
export class HomeModule {}

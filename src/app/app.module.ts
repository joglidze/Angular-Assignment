import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home-page/home.module';
import { ContextMenuDirective } from './shared/context-menu.directive';

@NgModule({
  declarations: [AppComponent, UserInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

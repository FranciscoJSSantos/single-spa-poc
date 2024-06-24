import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MainComponent } from './pages/main/main.component';
import { SecondComponent } from './pages/second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    MainComponent,
    SecondComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingModule } from './rating/rating.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnglrLoaderModule } from 'anglr-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnglrLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

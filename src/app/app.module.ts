import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxContainerComponent } from './components/box-container/box-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

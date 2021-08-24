import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { InprogressComponent } from './components/in-progress/in-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ToggleComponent,
    CollapsibleComponent,
    InprogressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

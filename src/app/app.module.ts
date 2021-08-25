import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { InprogressComponent } from './components/in-progress/in-progress.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    ToggleComponent,
    CollapsibleComponent,
    InprogressComponent,
    BreadcrumbsComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

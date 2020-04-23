import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { IndexComponent } from './pages/auth/index/index.component';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,

 
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

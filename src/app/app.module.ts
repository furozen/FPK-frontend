import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {AppRoutingModule} from './app-routing.module';
import { IdentifyComponent } from './identify/identify.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthPageComponent } from './mockPages/auth-page/auth-page.component';
import { OrderMockComponent } from './mockPages/order-mock/order-mock.component';
import { TinderComponent } from './mockPages/tinder/tinder.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    IdentifyComponent,
    HeaderComponent,
    FooterComponent,
    AuthPageComponent,
    OrderMockComponent,
    TinderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

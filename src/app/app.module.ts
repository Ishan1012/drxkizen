import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ProductPageComponent,
    AboutUsPageComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

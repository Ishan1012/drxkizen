import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: 'index', component: IndexPageComponent},
  { path: 'services', component: ServicesPageComponent},
  { path: 'products', component: ProductPageComponent},
  { path: 'about', component: AboutUsPageComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: '**', redirectTo: '/index'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

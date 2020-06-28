import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent

  },
  {
    path:"destinations", component: DestinationsComponent

  },
  {
    path:"blog", component: BlogComponent

  },
  {
    path: 'locData/:productId', component: BlogComponent
  },
  {
     path: 'cart', component: CartComponent
  },
  {
    path:"contact", component: ContactComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

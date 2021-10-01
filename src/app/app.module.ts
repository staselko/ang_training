import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';


// import { products } from '../products'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { QuickBuyComponent } from './quick-buy/quick-buy.component';
import { AdminComponent } from './admin/admin.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoComponent } from './todo/todo.component';


const appRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent },
  {path: 'about', component: AboutUsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'shipping', component: ShippingComponent}, 
  {path: 'admin', component: AdminComponent},
  {path: 'tictac', component: TicTacToeComponent},
  {path: 'todo', component: TodoComponent}
]

@NgModule({
  
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    ShopHeaderComponent,
    CartComponent,
    ShippingComponent,
    QuickBuyComponent,
    AdminComponent,
    TicTacToeComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
   ),
  //  NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

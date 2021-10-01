import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }
    items
    checkoutForm

  totalCost = 0
  ngOnInit(): void {
    this.items = this.cartService.getItems()
    this.items.forEach(element => {
      return this.totalCost += element.price
    });
  }

  onSubmit(customerData) {
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.totalCost = 0
    console.warn('Your order has been submitted', customerData, this.items);
  }

  // remove(id) {
  //   delete this.items[id]
  // }

}

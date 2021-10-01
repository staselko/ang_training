import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCost
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  this.shippingCost = this.cartService.getShippingPrices()
  
  }


}

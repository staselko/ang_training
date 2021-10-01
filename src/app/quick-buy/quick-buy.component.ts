import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ProductDetailsComponent } from '../product-details/product-details.component'

@Component({
  selector: 'app-quick-buy',
  templateUrl: './quick-buy.component.html',
  styleUrls: ['./quick-buy.component.scss']
})
export class QuickBuyComponent implements OnInit {
  checkoutForm
  productPrice
  constructor(
    private formBuilder: FormBuilder,
    private ProdDetails: ProductDetailsComponent
  ) { 
    this.checkoutForm = this.formBuilder.group ({
      name: '',
      adress: ''
    })

    this.productPrice = this.ProdDetails.product.price
  }

  ngOnInit(): void {
  } 

  onSubmit(customerData) {
    this.checkoutForm.reset()
    console.warn('Your order has been submitted', customerData, this.ProdDetails.product.name)
  }

}

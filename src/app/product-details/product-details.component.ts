import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
// import { products } from '../../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  
})
export class ProductDetailsComponent implements OnInit {
  product
  time: Date = new Date()
  constructor(
    private route: ActivatedRoute,  
    private cartService: CartService,
    private productsServise: ProductsService  
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }

  ngOnInit(): void {
    let products = this.productsServise.productsList
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}

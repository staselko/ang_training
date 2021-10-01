import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
// import { products } from '../../products'
import { ProductsService, WeatherData } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  items = []
  weatherData: WeatherData[]
  constructor(
    private productList: ProductsService,
    private cartService: CartService,
  ) { }

  cityName: string

  ngOnInit(): void {
    this.items = this.productList.getData()
    // this.items.forEach(item => console.log(item))
  }

  addToCart(product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }

  share() {
    alert('Product has been shared')
  }


  onClick() {
    this.weatherData = (this.weatherData = this.productList.getItems(this.cityName))
    this.cityName = ''
    this.clearField()
  }
  clearField() {
    var elem = document.getElementById("weather-field");
    if (elem) {
      elem.parentElement.removeChild(elem);
    }
  }
}

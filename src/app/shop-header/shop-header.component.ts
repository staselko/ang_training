import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
// import { products } from 'src/products'; 
// import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  shopItems = []
  phoneTitle = ''
  sortedItems = []
  constructor(private productsService: ProductsService) {
    this.shopItems = productsService.getData()
  }
  ngOnInit(): void {
  }

  checkItems() {
    // console.log(this.shopItems.map(item=>item.name))
    this.sortedItems = this.shopItems.filter(item => {
      if (item.name.toLowerCase().includes(this.phoneTitle.toLowerCase())) {
        return item
      }
    })

    this.sortedItems.filter((item, index) => {
      if (!item) {
        this.sortedItems.splice(index)
      }
    })


    console.log(this.sortedItems.forEach(i=>console.log(i)))
  }


}

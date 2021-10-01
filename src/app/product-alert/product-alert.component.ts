import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {
  @Input() product
  constructor() { }

  ngOnInit(): void {
  }
  subsc() {
    alert('You will be know')
  }
}

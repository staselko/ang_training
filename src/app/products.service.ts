import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherData {
  [x: string]: any;
  temp: number,
  name: string,
  onSky: string
}
@Injectable({
  providedIn: 'root'
})

export class ProductsService implements OnInit {

  public productsList = [{
    name: 'Iphone 6',
    description: 'The 4.7-inch iPhone 6 launched on September 19th, 2014 alongside the iPhone 6 Plus, which features a larger 5.5" display. Apple plans on making both models available in over 100 countries by the end of 2014.',
    price: 400,
    image: './assets/images/iphone_6.png',
    id: 0
  },


  {
    name: 'Samsung XR',
    description: 'Apple has just announced the iPhone XR, which offers much of the same user experience of the iPhone X, but with some notable departures. The phone is larger than the iPhone X, with a 6.1-inch LCD display. It retains the TrueDepth camera that first launched on the 2017 iPhone X, and says goodbye to the Home button.',
    price: 700,
    image: './assets/images/iphone_xr.jpeg',
    id: 0

  },  
  {
    name: 'Iphone XR',
    description: 'Apple has just announced the iPhone XR, which offers much of the same user experience of the iPhone X, but with some notable departures. The phone is larger than the iPhone X, with a 6.1-inch LCD display. It retains the TrueDepth camera that first launched on the 2017 iPhone X, and says goodbye to the Home button.',
    price: 700,
    image: './assets/images/iphone_xr.jpeg',
    id: 0

  },

  {
    name: 'Iphone 12',
    description: 'Apple has finally announced that its iPhone 12, as well as the small iPhone 12 mini. The iPhone lineup has an all-new design, 5G, new sizes, and more. Heres everything we know about Apples brand new mainstream phones.',
    price: 1400,
    image: './assets/images/iphone_12.jpeg',
    id: 0
  },
  ]
  weatherData: WeatherData[] = []
  
  data_url = 'https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&units=metric&appid=cbb2494521f7589543515335fdc5579a'

  constructor(private http: HttpClient) {
  }
  
  ngOnInit() {

  }



  getData() {
    return this.productsList.forEach((item,index)=> {
      item.id = index
    }), this.productsList
  }

  getItems(name: string) {
    this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=metric&appid=cbb2494521f7589543515335fdc5579a`)
    .subscribe(res => {
      this.weatherData.push({
        temp: res.main.temp,
        name: res.name,
        onSky: res.weather[0].description 
      })
    })
    return this.weatherData
    
  }
  
}

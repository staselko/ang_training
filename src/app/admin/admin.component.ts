import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }
  adminLogin = '123'
  adminPass = '123'
  curentLogin: string
  curentPass: string

  ngOnInit(): void {
    
  }

  redirectAdmin() {
    if (this.adminLogin === this.curentLogin && this.adminPass === this.curentPass) {
      this.router.navigate(['/adminredactor'])
    }
  }
}

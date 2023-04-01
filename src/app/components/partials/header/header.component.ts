import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    carQty=0;
    constructor(
        cartService:CartService
    ){
      cartService.getCartObservable().subscribe(
        (newcart)=>{
          this.carQty = newcart.totalCount
        }
      )
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.

    }
}

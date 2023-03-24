import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.foods =  this.foodService.getAllfoodsBySearchTerm(params.searchTerm)
      }
      else if(params.tag){
        this.foods= this.foodService.getAllFoodsByTag(params.tag);
      }
      else{
        this.foods =  foodService.getAll();
      }
    }
   )

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}

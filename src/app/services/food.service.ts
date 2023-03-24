import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  }
  getAllfoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag =='All'? this.getAll():this.getAll().filter(food=> food.tags?.includes(tag));
  }
}
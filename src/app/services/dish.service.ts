import { Injectable } from '@angular/core';

import { Dish } from '../../shared/dish';
import { DISHES } from '../../shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  returnDishes() : Dish[]{
    return DISHES;
  }

  returnDish(id : string ) : Dish {
    return DISHES.filter( (dish) => dish.id === id )[0];
  }
}

import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes : Dish[];

  constructor(public dishService : DishService) { }

  breakpoint:string;

  ngOnInit(): void {
    this.dishes = this.dishService.returnDishes();
    this.breakpoint = (window.innerWidth<700) ? "1" : (window.innerWidth<1060 ) ? "2" : "3"; 
  }

  onChange(event){
    this.breakpoint = (event.target.innerWidth<700 ) ? "1" : (event.target.innerWidth<1060) ? "2" : "3";
  }
}

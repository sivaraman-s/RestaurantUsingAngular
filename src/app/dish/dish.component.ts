import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})

export class DishComponent implements OnInit {

  dish : Dish;
  
  constructor(private dishService : DishService, 
              private routes      : ActivatedRoute,
              private location    : Location ) 
              
  { }

  ngOnInit(): void {

    const id = this.routes.snapshot.params['id'];
    this.dish = this.dishService.returnDish(id);
  }

  goBack(): void{
    this.location.back();
  }

}

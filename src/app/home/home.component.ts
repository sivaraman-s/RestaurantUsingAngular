import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  slides=[
    {'image':'assets/img-1.jpg'},{'image':'assets/logo.jpg'},{'image':'assets/img-1.jpg'},
    {'image':'assets/logo.jpg'},{'image':'assets/img-1.jpg'}
  ]
}

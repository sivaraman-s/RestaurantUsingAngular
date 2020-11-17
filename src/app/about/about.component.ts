import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';
import { people } from '../../shared/team';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ourpeople : people[];

  constructor( public teamService : TeamService) { }

  ngOnInit(): void {

    this.ourpeople = this.teamService.returnPeople();
  }

}

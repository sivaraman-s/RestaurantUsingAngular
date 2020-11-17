import { Injectable } from '@angular/core';
import { people } from '../../shared/team';
import { teams } from '../../shared/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  ourpeople : people;

  constructor() { }

  returnPeople(): people[]{
    return teams;
  }
  
}

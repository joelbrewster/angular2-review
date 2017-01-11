import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}} {{address.city}} {{address.state}}</p>
  <button (click)="toggleHobbies()">Show hobbies</button>
  <div *ngIf="showHobbies">
  <ul>
    <li *ngFor ="let hobby of hobbies">
        {{hobby}}
    </li>
  </ul>
  </div>

  `,
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  
  
  constructor() {
    this.name = 'Angular'; 
    this.email = 'name@email.com';
    this.address = {
        street: '123 road',
        city: 'Melbourne',
        state: 'VIC'
    }
    this.hobbies  = ['music', 'movies','icecream'];
    this.showHobbies = false;
  }  

toggleHobbies(){
    if(this.showHobbies == true) {
        this.showHobbies = false;
    } else {
        this.showHobbies = true;
        }
    }
}
interface address {
    street: string;
    city: string;
    state: string;
}
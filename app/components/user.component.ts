import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}} {{address.city}} {{address.state}}</p>
  `,
})
export class UserComponent  { 
  name: string; 
  email: string;
  address;
  
  
  constructor() {
    this.name = 'Angular'; 
    this.email = 'name@email.com';
    this.address = {
        street: '123 road',
        city: 'Melbourne',
        state: 'VIC'
    }
  }  
}

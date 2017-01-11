import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}} {{address.city}} {{address.state}}</p>
  `,
})
export class UserComponent  { 
  name = 'Angular'; 
  email = 'name@email.com';
  address = {
    street: '123 road',
    city: 'Melbourne',
    state: 'VIC'
  }
  constructor() {
      console.log('constructor ran...');
  }
}

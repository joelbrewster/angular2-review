import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'user',
  template: `<h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Address: {{address.street}} {{address.city}} {{address.state}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide hobbies" : "Show hobbies"}}</button>
  <div *ngIf="showHobbies">
  <ul>
    <li *ngFor ="let hobby of hobbies; let i = index">
        {{hobby}} <button (click)="deleteHobby(i)">X</button>
    </li>
  </ul>

  <form (submit)="addHobby(hobby.value)">
    <label>Add hobby: </label><br />
    <input type="text" #hobby /><br />
   </form>

  </div>
  <hr />
  <h3>Edit User</h3>
  <form>
    <label>Name: </label><br />
    <input type="text" name="name" [(ngModel)] = "name"/><br />
    <label>Email: </label><br />
    <input type="text" name="email" [(ngModel)] = "email"/><br />
    <label>Street: </label><br />
    <input type="text" name="address.street" [(ngModel)] = "address.street"/><br />
    <label>City: </label><br />
    <input type="text" name="address.city" [(ngModel)] = "address.city"/><br />
    <label>State: </label><br />
    <input type="text" name="address.state" [(ngModel)] = "address.state"/><br />
  </form>
  <hr />
  <h3>Posts</h3>
  <div *ngFor="let post of posts">
    <h3>{{post.title}}</h3>
    <p>{{post.body}}</p>
  </div>
  `,
  providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Angular';
    this.email = 'name@email.com';
    this.address = {
        street: '123 road',
        city: 'Melbourne',
        state: 'VIC'
    }
    this.hobbies  = ['music', 'movies','icecream'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

toggleHobbies(){
    if(this.showHobbies == true) {
        this.showHobbies = false;
    } else {
        this.showHobbies = true;
        }
    }
    addHobby(hobby){
      this.hobbies.push(hobby);
    }
    deleteHobby(i){
      this.hobbies.splice(i, 1);
    }
}
interface address {
    street: string;
    city: string;
    state: string;
}
interface Post{
  id: number;
  title: string;
  body: string;
}

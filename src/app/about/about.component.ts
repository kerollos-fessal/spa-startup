import { Component } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
userName :string= "kerollos" ;
myAge :number = 30;

 friends : string[] = [ "Alice", "Bob", "Charlie"];

 welcome() {
  console.log(`hii ${this.userName}`);
  this.userName = "keroo";
}

toggleInfo(){
  if(this.myAge> 10){
    this.myAge = 5;
  }else{
    this.myAge = 30;
  }
}

printInConsole(e:any){
  console.log('hello form typescript', e);
}

products : Product[] = [
  {
    name : "iphone",
    price : 12000,
    category : "Electronics"
  },
  {
    name : "Samsung",
    price : 1200,
    category : "mob"
  },
  {
    name : "Huwawei",
    price : 15000,
    category : "smart mob"
  },
  {
    name : "realme",
    price : 14000,
    category : "ios"
  }
]


}

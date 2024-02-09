import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userName: string = "";
  userAge: string = "";
  userEmail: string = "";
  userPassword: string = "";

  //  hasValue :boolean = false;

  // setClass(e:any) {
  //   console.log(e.target.value);
  //   if(e.target.value.length>0){
  //     this.hasValue=true;
  //   }else{
  //     this.hasValue=false;
  //   }
  //   }
}

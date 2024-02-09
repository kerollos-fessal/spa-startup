import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'app2';
  isTop : boolean = true;
  aboutActive : boolean = false;
  portfolioActive : boolean = false;
  contactActive : boolean = false;
  
  windowScroll(event:any) {
    console.log(event);
    if (this.isTop) {
      this.isTop = true;
    } else {
      this.isTop = false;   
    }    
  };


  checkActive(e:any){
if(e.target.ariaCurrent == "about"){
  this.aboutActive = true;
  this.contactActive = false;
  this.portfolioActive = false;
}else if(e.target.ariaCurrent == "portfolio"){
  this.portfolioActive=true;
  this.aboutActive=false;
  this.contactActive=false;
}else if(e.target.ariaCurrent=="contact"){
  this.contactActive=true;
  this.portfolioActive=false;
  this.aboutActive=false;
  }else{
    this.contactActive=false;
    this.portfolioActive=false;
    this.aboutActive=false;
  }
  }


}

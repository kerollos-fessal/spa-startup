import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
layerSrc: string = "";
hide: boolean = true;

sources : string[] = [ 
  "assets/images/poert1.png",
   "assets/images/port2.png",
    "assets/images/port3.png"
  ];

getSrc(e:any){
  this.layerSrc=e;
  this.hide = false;
}

hideLayer(e:any){
  if (e.target == e.currentTarget) {
    this.hide = true;
  }
}

}

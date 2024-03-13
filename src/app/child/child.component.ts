import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() inputValue: string = '';
@Output() msgValue: EventEmitter<string> = new EventEmitter;



printMsg(){
  // console.log("hello from console");
  this.msgValue.emit("hello from child to parent");
}
}

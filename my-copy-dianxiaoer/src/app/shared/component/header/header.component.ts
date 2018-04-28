import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.css']
})
export class HeaderComponent implements OnInit {

 @Output() toParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendUrl(e){
    this.toParent.emit(e);
  }
}

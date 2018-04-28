import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['sider.css']
})
export class SiderComponent implements OnInit {

  @Input() siderMenu:Array<any> = [];

  public showSubmenu:string = '';
  url:string;
  constructor() { }

  ngOnInit() {
  }
  submenu(element:any){
    this.showSubmenu = element;
  }

}

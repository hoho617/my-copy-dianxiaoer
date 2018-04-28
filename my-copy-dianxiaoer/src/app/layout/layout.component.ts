import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.css']
})
export class LayoutComponent implements OnInit {

  public offsetWidth:number = document.body.clientWidth - 140 - 190 -8;
  constructor(
    private router:Router
  ) { }
  public url;

  ngOnInit() {
    /*if(this.router.url.indexOf('?')!=-1){
      let num=this.router.url.indexOf('?');
      this.url=this.router.url.slice(0,num);
    }else {
      this.url=this.router.url;
    }
    console.log("this.url",this.url);*/
    this.changeRoutes(this.router.url);
  }

  public siderMenu;
  /*changeRoutes(url){ //此为最重要的部分，根据header组件传过来的url生成menuData数组
    console.log("url",url)
    if(url.startsWith("/order")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"订单管理",href:"/order",type:"outside",isSelected:url=="/order"});
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.siderMenu=tempMenu;
      console.log("this.menuData",this.siderMenu)
    }
    else if(url.startsWith("/comment")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/goods")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"商品管理",href:"/goods",type:"outside",isSelected:url=="/goods"});
      tempMenu.push({name:"商品类别",href:"/goods/goods-type",type:"outside",isSelected:url=="/goods/goods-type"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/client")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"客户管理",href:"/client",type:"outside",isSelected:url=="/client"});
      tempMenu.push({name:"标签管理",href:"/client/tag",type:"outside",isSelected:url=="/client/tag"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/setting")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"店铺设置",href:"/setting",type:"outside",isSelected:url=="/setting"});
      tempMenu.push({name:"用户设置",href:"/setting/setting-user",type:"outside",isSelected:url=="/setting/setting-user"});
      tempMenu.push({name:"消息设置",href:"/setting/setting-info",type:"outside",isSelected:url=="/setting/setting-info"});
      tempMenu.push({name:"房间设置",href:"/setting/setting-room",type:"outside",isSelected:url=="/setting/setting-room"});
      tempMenu.push({name:"支付设置",href:"/setting/setting-pay",type:"outside",isSelected:url=="/setting/setting-pay"});
      tempMenu.push({name:"会员设置",href:"/setting/setting-vip",type:"outside",isSelected:url=="/setting/setting-vip"});
      this.siderMenu=tempMenu;
    }
  }*/

  changeRoutes(url){ //此为最重要的部分，根据header组件传过来的url生成menuData数组
    console.log("url",url)
    if(url.startsWith("/order")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"订单管理",href:"/order",type:"parent",isSelected:url=="/order",children:[
        {name:'订单查询',href:'/query',isSelected:url==="/order/query",type:'outside'},
        {name:'订单删除',href:'/delete',isSelected:url==="/order/delete",type:'outside'}
      ]});
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.siderMenu=tempMenu;
      console.log("this.menuData",this.siderMenu)
    }
    else if(url.startsWith("/comment")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"点评管理",href:"/comment",type:"outside",isSelected:url=="/comment"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/goods")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"商品管理",href:"/goods",type:"outside",isSelected:url=="/goods"});
      tempMenu.push({name:"商品类别",href:"/goods/goods-type",type:"outside",isSelected:url=="/goods/goods-type"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/client")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"客户管理",href:"/client",type:"outside",isSelected:url=="/client"});
      tempMenu.push({name:"标签管理",href:"/client/tag",type:"outside",isSelected:url=="/client/tag"});
      this.siderMenu=tempMenu;
    }
    else if(url.startsWith("/setting")){
      let tempMenu = new Array<any>();
      tempMenu.push({name:"店铺设置",href:"/setting",type:"outside",isSelected:url=="/setting"});
      tempMenu.push({name:"用户设置",href:"/setting/setting-user",type:"outside",isSelected:url=="/setting/setting-user"});
      tempMenu.push({name:"消息设置",href:"/setting/setting-info",type:"outside",isSelected:url=="/setting/setting-info"});
      tempMenu.push({name:"房间设置",href:"/setting/setting-room",type:"outside",isSelected:url=="/setting/setting-room"});
      tempMenu.push({name:"支付设置",href:"/setting/setting-pay",type:"outside",isSelected:url=="/setting/setting-pay"});
      tempMenu.push({name:"会员设置",href:"/setting/setting-vip",type:"outside",isSelected:url=="/setting/setting-vip"});
      this.siderMenu=tempMenu;
    }
  }

  onVoted(e) {
    this.changeRoutes(e);
  }
}

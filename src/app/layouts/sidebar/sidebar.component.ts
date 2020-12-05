import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideBarMenu: ISidebar[] = [
    {
      iconClass: "fa fa-bar-chart fa-2x",
      title: "Dashboard",
      route: "dashboard"
    },
    {
      iconClass: "fa fa-home fa-2x",
      title: "Test Centers",
      route: "test-centers"
    },
    {
      iconClass: "fa fa-file-text-o fa-2x",
      title: "Test Sessions",
      route: "test-sessions"
    },
    {
      iconClass: "fa fa-shopping-basket fa-2x",
      title: "Products",
      route: "products"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

export interface ISidebar {
  iconClass: string,
  title: string,
  route: string
}

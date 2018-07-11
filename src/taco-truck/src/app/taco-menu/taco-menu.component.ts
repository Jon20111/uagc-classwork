import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/interfaces/menu-item';

import { MenuItemsService } from '../shared/services/menu-items.service';


@Component({
  selector: 'app-taco-menu',
  templateUrl: './taco-menu.component.html',
  styleUrls: ['./taco-menu.component.scss']
})
export class TacoMenuComponent implements OnInit {

  menuItems: Array<MenuItem> = [];
  allMenuItems: Array<MenuItem> = [];

  sortProperty: String = 'name';
  sortDirection: String = 'asc';

  

  constructor(private menuService: MenuItemsService) { }

  ngOnInit() {

    this.menuService.getMenuItems().forEach(element =>{
      //this.menuItems.push(element);
      this.allMenuItems.push(element);
      this.sort();
    });
  }

  sort(){
    this.menuItems = this.allMenuItems;
    // const direction = (this.sortDirection === 'asc') ? 1 : -1;

    // this.menuItems.sort((a, b) => {
    //   if (a[this.sortProperty] < b[this.sortProperty]) {
    //     return -1 * direction;
    //   } else if (a[this.sortProperty] > b[this.sortProperty]) {
    //     return 1 * direction;
    //   } else {
    //     return 0;
    //   }
    // });


  }

}

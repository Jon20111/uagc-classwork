import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MenuItemsService } from '../shared/services/menu-items.service';
import { MenuItem } from '../shared/interfaces/menu-item';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private menuService: MenuItemsService) { }

  currentMenuItem: MenuItem;
  
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined){
        const id: number = +params['id'];
        this.currentMenuItem = this.menuService.getMenuItemsById(id);
      }
    })
  }

}

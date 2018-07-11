import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }

  public getMenuItems(): Array<MenuItem>{

    return [
      {
        id: 1,
        name: "Taco",
        description: "Just a Taco",
        category: "Tacos",
        price: 1.5,
        isFeatured: false
    },
    {
        id: 2,
        name: "TacocaT",
        description: "A Palindrome",
        category: "Tacos",
        price: 2.2,
        isFeatured: false
    },
    {
      id: 3,
      name: "Burrito",
      description: "Flour tortilla",
      category: "Burrito",
      price: 10.00,
      isFeatured: false
    }
  
    ];
  }

  public getMenuItemsById(id: number): MenuItem {
    return this.getMenuItems().find(element =>{
      return element.id === id
    })
  }
}

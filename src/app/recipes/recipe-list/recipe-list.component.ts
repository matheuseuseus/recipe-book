import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: '[app-recipe-list]',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2017/09/26/dining/26COOKING-BAKEDZITI/26COOKING-BAKEDZITI-articleLarge.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

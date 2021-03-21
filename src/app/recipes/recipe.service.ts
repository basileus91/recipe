import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Flavour Soup', 'Flavour soup with pork meat',
      'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2018/09/Beef-casserole-recipe.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 13),
      ]),
    new Recipe('Panckakes', 'Panckakes with sirop',
      'https://media4.s-nbcnews.com/i/newscms/2020_16/1558143/martha-recipes-today-main-200413_41de0fe80755b18142fdcfefdeca654a.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}

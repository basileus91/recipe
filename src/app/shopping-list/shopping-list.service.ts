import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 6)
  ];
  // ingredientAdded = new EventEmitter<boolean>();
  ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}

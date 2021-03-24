import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  BASE_URL = 'https://recipe-book-5ce66.firebaseio.com/';

  constructor(
    private readonly http: HttpClient,
    private readonly recipeService: RecipeService
  ) {
  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.BASE_URL}/recipes.json`, recipes).subscribe(value => {
      console.log(value);
    });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}/recipes.json`)
      .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}

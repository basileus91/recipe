import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import { map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  BASE_URL = 'https://recipe-book-5ce66.firebaseio.com/recipes.json';

  constructor(
    private readonly http: HttpClient,
    private readonly recipeService: RecipeService,
    private readonly authService: AuthService
  ) {
  }

  storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.http.put(`${this.BASE_URL}`, recipes).subscribe(value => {
      console.log(value);
    });
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.BASE_URL}`)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
          }
        )
      );
  }
}

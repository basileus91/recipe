import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeResolverService} from './recipe-resolver.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: RecipesComponent, canActivate: [AuthGuard],
        children: [
          {path: '', component: RecipeStartComponent},
          {path: 'new', component: RecipeEditComponent},
          {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
          {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]},
        ]
      }
    ]),
    SharedModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule {
}

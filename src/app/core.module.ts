import {NgModule} from '@angular/core';
import {DataStorageService} from './shared/data-storage.service';
import {RecipeResolverService} from './recipes/recipe-resolver.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

@NgModule({
  providers: [
    DataStorageService,
    RecipeResolverService,
    AuthService,
    AuthGuard,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    }
  ]
})
export class CoreModule {

}

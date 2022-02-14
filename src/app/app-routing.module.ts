import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  { path: "", component: RecipesComponent },
  { path: "shopping", component: ShoppingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

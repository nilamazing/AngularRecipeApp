import { Component } from "@angular/core";
import { Recipe } from "../model/recipe.model";

@Component({
    selector: "app-recipes",
    templateUrl: "recipes.component.html"
})

export class RecipesComponent{
    recipes:Recipe[]=[];
    recipeItemSelected!: Recipe;

    checkRecipeItem(recipeItemEvent:Recipe){
        console.log("In checkRecipeItem");
        console.log(recipeItemEvent);
        this.recipeItemSelected=recipeItemEvent;
    }
}
import { Component, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Event } from "@angular/router";
import { EventEmitter } from '@angular/core';
import { Recipe } from "../model/recipe.model";
import { RecipeCreateComponent } from "../recipe-create/recipe-create.component";

@Component({
    selector: "app-recipe-list",
    templateUrl: "recipe-list.component.html",
    styleUrls: ["recipe-list.component.css"]
})

export class RecipeListComponent{
    @Input() recipes!:Recipe[];
    @Output() onRecipeItemDispatch:EventEmitter<Recipe>=new EventEmitter<Recipe>();
    constructor(private dialog:MatDialog){

    }
    openRecipeDialog(){
      let dialogRef=this.dialog.open(RecipeCreateComponent,{
            width: "700px"
        });
        dialogRef.afterClosed().subscribe((data)=>{
            // console.log("The dialog was closed");
            // console.log(data);
            if(data){
                this.recipes.push({name: data["recipeName"],desc:data["recipeDesc"],imagePath:data["recipeImg"]});
            }
        })
    }
    transmitRecipe(recipeItem:Recipe){
        this.onRecipeItemDispatch.emit(recipeItem);
    }
}
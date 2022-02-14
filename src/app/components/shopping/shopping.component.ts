import { Component } from "@angular/core";

@Component({
    selector: "app-shopping",
    templateUrl: "shopping.component.html"
})
export class ShoppingComponent{
    ingredientCrateMode:boolean=false;
    
    adjustIngredientCreateMode(createMode:boolean){
        this.ingredientCrateMode=createMode
    }
}
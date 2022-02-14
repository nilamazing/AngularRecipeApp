import { Component, EventEmitter, Output } from "@angular/core";
import { Ingredient } from "../Entities/Ingredient";

@Component({
    selector: "app-shopping-list",
    templateUrl: "shopping-list.component.html"
})

export class ShoppingListComponent{
    ingredientList!: Ingredient[];
    displayedColumns=["name","amount"];
    createIngredientSwitch=false;
   @Output() emitCreation=new EventEmitter<boolean>();
   
    enableCreateIngredient(){
        this.createIngredientSwitch=true;
        this.emitCreation.emit(this.createIngredientSwitch);
    }
}
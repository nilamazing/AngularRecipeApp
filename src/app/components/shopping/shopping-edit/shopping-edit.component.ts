import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "shopping-edit.component.html",
    styleUrls: ["shopping-edit.component.css"]
})

export class ShoppingEditComponent{
    @Input() editModeEnabled:boolean=false;
    createIngredient(form:NgForm){
        if(form.valid){
            console.log(form.value)
        }
    }
}
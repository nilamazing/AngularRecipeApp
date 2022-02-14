import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "app-recipe-create",
    templateUrl: "recipe-create.component.html",
    styleUrls: ["recipe-create.component.css"]
})

export class RecipeCreateComponent{
    createdRecipeData:any;
    constructor(public dialogRef: MatDialogRef<RecipeCreateComponent>){

    }
    
    createRecipe(form:NgForm){
        if(form.valid){
            this.createdRecipeData=form.value;
            this.closeDialog();
        }
    }

    closeDialog(){
        this.dialogRef.close(this.createdRecipeData);
    }
}
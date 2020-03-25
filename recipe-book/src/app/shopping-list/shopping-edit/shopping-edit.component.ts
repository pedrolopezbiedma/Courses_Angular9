import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent  {
    @ViewChild('newIngredientForm') form: NgForm;

    constructor(private ingredientsService: IngredientsService) { }

    onIngredientAdded(){
        this.ingredientsService.addIngredient({name: this.form.value.name, amount: this.form.value.amount})
    }
}
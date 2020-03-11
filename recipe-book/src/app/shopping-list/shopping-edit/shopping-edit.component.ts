import { Component, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent  {
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    onIngredientAdded(nameInput, amountInput){
        this.ingredientAdded.emit({name: nameInput.value, amount: amountInput.value});

    }
}
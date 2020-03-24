import { Component } from '@angular/core';

import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent  {
    constructor(private ingredientsService: IngredientsService) { }

    onIngredientAdded(nameInput, amountInput){
        this.ingredientsService.addIngredient({name: nameInput.value, amount: amountInput.value})
    }
}
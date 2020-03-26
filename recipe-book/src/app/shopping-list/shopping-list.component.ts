import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';
import { IngredientsService } from '../services/ingredients.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy{
    ingredients: Ingredient[] = [ ];
    private ingredientAddedSubscription: Subscription;
    
    constructor(private ingredientsService: IngredientsService) { }

    ngOnInit(){
        this.ingredients = this.ingredientsService.getIngredients();
        this.ingredientAddedSubscription = this.ingredientsService.ingredientAdded
            .subscribe(newIngredientList => {
                this.ingredients = newIngredientList;
            })
    }

    ngOnDestroy(){
        this.ingredientAddedSubscription.unsubscribe();
    }

    onShoppingListItemSelected(index: number){
        this.ingredientsService.emitIngredientSelected(index);
    }

}

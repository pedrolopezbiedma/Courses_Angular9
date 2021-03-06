import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Ingredient } from '../models/ingredient.model';
import { IngredientsService } from '../services/ingredients.service';
import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit{
    ingredients: Observable<{ ingredients: Ingredient[] }>;
    
    constructor(
        private ingredientsService: IngredientsService,
        private store: Store<fromApp.AppState>
    ) { }

    ngOnInit(){
        this.ingredients = this.store.select('shoppingList');
    }

    onShoppingListItemSelected(index: number){
        this.ingredientsService.emitIngredientSelected(index);
    }

}

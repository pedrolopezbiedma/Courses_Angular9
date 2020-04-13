import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IngredientsService } from 'src/app/services/ingredients.service';
import * as fromShoppingList from '../store/shopping-list.reducer'

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('newIngredientForm') form: NgForm;
    private ingredientClickedSubscription: Subscription;
    editMode = false;

    constructor(private ingredientsService: IngredientsService,
                private store: Store<fromShoppingList.AppState>
    ) { }
    
    ngOnInit(){
        this.ingredientClickedSubscription = this.ingredientsService.ingredientClicked.
            subscribe(ingredientClicked => {
                this.form.setValue({
                    "name": ingredientClicked.name,
                    "amount": ingredientClicked.amount
                })
                this.editMode = true;
            });
    }
    ngOnDestroy(){
        this.ingredientClickedSubscription.unsubscribe();
    }

    onSubmit(){
        if(this.editMode){
            this.ingredientsService.editIngredient({name: this.form.value.name, amount: this.form.value.amount})
        }
        else{
            this.ingredientsService.addIngredient({name: this.form.value.name, amount: this.form.value.amount})
        }
        this.form.reset();
        this.editMode = false;
    }

    onClear(){
        this.form.reset();
        this.editMode = false;
    }

    onDelete(){
        this.ingredientsService.deleteIngredient();
        this.editMode = false;
        this.form.reset();
    }
}
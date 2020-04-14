import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { IngredientsService } from 'src/app/services/ingredients.service';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('newIngredientForm') form: NgForm;
    private editModeStartedSubscription: Subscription;
    editMode = false;

    constructor(
        private ingredientsService: IngredientsService,
        private store: Store<fromApp.AppState>
    ) { }
    
    ngOnInit(){
        this.editModeStartedSubscription = this.store.select('shoppingList')
            .subscribe(stateData => {
                if(stateData.editedIngredientIndex > -1){
                    this.form.setValue({
                        "name": stateData.editedIngredient.name,
                        "amount": stateData.editedIngredient.amount
                    })
                    this.editMode = true;
                }
            });
    }
    ngOnDestroy(){
        this.onClear();
        this.editModeStartedSubscription.unsubscribe();
    }

    onSubmit(){
        if(this.editMode){
            this.ingredientsService.editIngredient({name: this.form.value.name, amount: this.form.value.amount})
        }
        else{
            this.ingredientsService.addIngredient({name: this.form.value.name, amount: this.form.value.amount})
            
        }
        this.onClear();
    }

    onDelete(){
        this.ingredientsService.deleteIngredient();
        this.onClear();
    }

    onClear(){
        this.form.reset();
        this.editMode = false;
        this.ingredientsService.emitIngredientNotSelected();
    }
}
import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})

export class RecipeBookComponent  {
    constructor() { }
    @Input() pressedRecipe: Recipe;
    
    onPressedRecipe(pressedRecipe){
        this.pressedRecipe = pressedRecipe;
    }
}

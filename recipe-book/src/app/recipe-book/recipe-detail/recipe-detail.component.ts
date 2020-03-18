import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
    @Input() pressedRecipe: Recipe;
    constructor(private ingredientsService: IngredientsService) { }

    onAddToShoppingList(){
        this.ingredientsService.addIngredientsFromRecipe(this.pressedRecipe.ingredients);
    }
}
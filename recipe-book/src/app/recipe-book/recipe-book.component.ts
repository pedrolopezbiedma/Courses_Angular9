import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../services/recipes.service';

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})

export class RecipeBookComponent implements OnInit{
    pressedRecipe: Recipe;

    constructor(private recipesService: RecipeService) { }

    ngOnInit(){
        this.recipesService.selectedRecipe
            .subscribe((selectedRecipe: Recipe) => {
                this.pressedRecipe = selectedRecipe;
            })
    }
}

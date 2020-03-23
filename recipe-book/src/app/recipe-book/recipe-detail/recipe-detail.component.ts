import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
    shownRecipe: Recipe;
    constructor(private ingredientsService: IngredientsService,
                private recipesService: RecipeService,
                private activeRoute: ActivatedRoute) { }

    ngOnInit(){
        this.shownRecipe = this.recipesService.getRecipe(this.activeRoute.snapshot.params['id']);
        this.activeRoute.params
            .subscribe(params => {
                this.shownRecipe = this.recipesService.getRecipe(params['id']);
            })
    }

    onAddToShoppingList(){
        this.ingredientsService.addIngredientsFromRecipe(this.shownRecipe.ingredients);
    }
}
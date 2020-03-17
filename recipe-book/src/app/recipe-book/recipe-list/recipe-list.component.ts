import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{
    recipes: Recipe[] = [];

    constructor(private recipesService: RecipeService) { }
    ngOnInit(){
        this.recipes = this.recipesService.getRecipes();
    }

}

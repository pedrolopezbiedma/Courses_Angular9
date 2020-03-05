import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test',
        'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg')
    ];
    constructor() { }

}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from 'src/app/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy{
    recipes: Recipe[] = [];
    private recipesSubscription: Subscription;

    constructor(private recipesService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) { }
                
    ngOnInit(){
        this.recipes = this.recipesService.getRecipes();
        this.recipesSubscription = this.recipesService.recipesUpdated
            .subscribe(newRecipes => {
                this.recipes = newRecipes;
            })
    }

    ngOnDestroy(){
        this.recipesSubscription.unsubscribe();
    }

    onNewRecipeClicked(){
        this.router.navigate(['new'], { relativeTo: this.route })
    }
}

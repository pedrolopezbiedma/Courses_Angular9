import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  editMode = false;
  recipeId = '';

  constructor(private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit(){
    this.recipeId = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(params => {
        this.recipeId = params['id'];
        this.editMode = this.recipeId !== undefined ? true : false;
        this.initForm();
      })
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if(this.editMode){
      let recipe = this.recipesService.getRecipe(this.recipeId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
}

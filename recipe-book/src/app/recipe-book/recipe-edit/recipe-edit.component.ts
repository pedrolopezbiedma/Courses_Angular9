import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      let recipe = this.recipesService.getRecipe(this.recipeId);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/[1-9]+[0-9]*$/)])
          }));
        }
      }

    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/[1-9]+[0-9]*$/)])
    }));
  }
  
  onSubmit(){
    if(this.editMode){
      this.recipesService.editRecipe(this.recipeId, this.recipeForm.value);
    }
    else{
      this.recipesService.addRecipe(this.recipeForm.value);
      //console.log(this.recipeForm.value);
    }
  }
}

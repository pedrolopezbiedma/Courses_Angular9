import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  recipeId = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.recipeId = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(params => {
        this.recipeId = params['id'];
        this.editMode = this.recipeId !== undefined ? true : false;

      })
  }

}

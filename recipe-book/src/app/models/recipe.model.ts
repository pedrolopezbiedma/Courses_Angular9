import { Ingredient } from './ingredient.model';

export class Recipe {
    public recipeId: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[]

    constructor(recipeId: string, name: string, desc: string, imagePath: string, ingredientList: Ingredient[]) {
        this.recipeId = recipeId;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredientList;
    }
}

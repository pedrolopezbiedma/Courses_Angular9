import { Component } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent {
    title = 'Navbar';

    constructor(private dataStorage: DataStorageService) { }

    onStoreRecipes(){
        this.dataStorage.storeRecipes();
    }

    onFetchRecipes(){
        this.dataStorage.fetchRecipes();
    }
}
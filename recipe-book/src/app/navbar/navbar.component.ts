import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy{
    authSubscription = new Subscription();
    isAuthenticated = false;
    title = 'Navbar';

    constructor(private dataStorage: DataStorageService,
                private authService: AuthService) { }

    ngOnInit(){
        this.authSubscription = this.authService.authenticated
            .subscribe(authenticatedUser => {
                console.log('Usuario authenticado en el navbar');
                console.log(authenticatedUser);
                authenticatedUser ? this.isAuthenticated = true : this.isAuthenticated = false;
            })
    }
    onStoreRecipes(){
        this.dataStorage.storeRecipes();
    }

    onFetchRecipes(){
        this.dataStorage.fetchRecipes();
    }

    onLogout(){

    }
    
    ngOnDestroy(){
        this.authSubscription.unsubscribe();
    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { LogOutAction } from '../auth/store/auth.actions';
import * as fromApp from '../store/app.reducer'

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
                private router: Router,
                private store: Store<fromApp.AppState>) { }

    ngOnInit(){
        this.authSubscription = this.store.select('auth').subscribe(storeData => {
            storeData.user ? this.isAuthenticated = true : this.isAuthenticated = false;
        })

    }
    onStoreRecipes(){
        this.dataStorage.storeRecipes();
    }

    onFetchRecipes(){
        this.dataStorage.fetchRecipes();
    }

    onLogout(){
        this.store.dispatch(new LogOutAction());
        this.router.navigate(['auth']);
    }
    
    ngOnDestroy(){
        this.authSubscription.unsubscribe();
    }
}
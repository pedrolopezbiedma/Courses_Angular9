import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
    setToActiveCounter = 0;
    setToInactiveCounter = 0;

    constructor() { }
    
    incrementSetToActiveCounter(){
        this.setToActiveCounter++;
        console.log('Activated users: ' + this.setToActiveCounter)  
    }

    incrementSetToInactiveCounter(){
        this.setToInactiveCounter++;
        console.log('Deactivated users: ' + this.setToInactiveCounter)  
    }
}
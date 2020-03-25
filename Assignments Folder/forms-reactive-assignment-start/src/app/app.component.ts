import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statusArray = ['Stable', 'Critical', 'Finished'];
  myForm: FormGroup;

  ngOnInit(){
    this.myForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.noTestProjectName] ),
      'email': new FormControl(null, [Validators.required, Validators.email]), 
      'status': new FormControl(null)
    });
  }

  noTestProjectName(control: FormControl): {[s: string]: boolean}{
    if(control.value === 'Test'){
      return {'forbiddenProjectName': true};
    }
  }

  noTest2ProjectName(control: FormControl): Promise<any>{
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test2'){
          resolve({'forbiddenProjectName2': true});
        }
        else{
          resolve(null);
        }
      },1500)
    });
    return promise;
  }
  onSubmit(){
    console.log(this.myForm);
  }
}

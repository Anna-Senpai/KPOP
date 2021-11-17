import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введите URL картинки:</label>
                 <input [(ngModel)]="name" placeholder="">
                 <hr>
                 <img src="{{name}}" alt="Ne kartinka~">`
})
export class AppComponent { 
    name= '';
}
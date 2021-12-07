import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent implements OnChanges {
  @Input() someInput: any[] = [];

  ngOnChanges() {
    console.log(this.someInput);
  }

}
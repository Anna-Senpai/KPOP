import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: `./child.component.html`,
})
export class ChildComponent{


	max:number = 0;
	min:number = Infinity;
    riz:number = 0;

    @Input() num:number = 0;

    add(): void {

		if (this.max < this.num){
			this.max = this.num
		}
		if (this.min > this.num){
			this.min = this.num
		}

        this.riz = this.max - this.min;
    }
} 

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-two-way-binding',
	templateUrl: './two-way-binding.component.html',
	styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
	public title: string = "Two Way Binding";

	public name : string = "";
	public gender : number = 0; //nam : 0 , nu : 1

	constructor() { }

	ngOnInit(): void {
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-goodbey',
	templateUrl: './goodbey.component.html',
	styleUrls: ['./goodbey.component.css']
})
export class GoodbeyComponent implements OnInit {

	public count: number = 0;
	public name : string = "";
	constructor() { }

	ngOnInit(): void {
	}

	onClick(event) {
		console.log(event);
	}
	onKeyUp(event) {
		this.name = event.target.value;
	}

}

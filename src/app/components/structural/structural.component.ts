import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-structural',
	templateUrl: './structural.component.html',
	styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

	public isChecked : boolean = true;
	public age : number;

	constructor() { }

	ngOnInit(): void {
	}

	onClickCheck(value){
	  	this.isChecked = value;
	}

}

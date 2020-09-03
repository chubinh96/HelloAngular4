import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hello',
	templateUrl: './hello.component.html',
	styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

	public name : string = "binh";
	public age : number = 24;
	public isMarried : boolean = false;

	public imgLink : string = "/../../../assets/image/sakura.jpg";

	public imgWidth = 300;

	public color : string  = "green";

	public user : object = {
		names : 'binh',
		age : 24,
		isMarried : false
	}

	showInfo(){
		return `name : ${this.user['names']}`;
	}

	constructor() { }

	ngOnInit(): void {
	}
}
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { DataService } from "src/app/data.service";
import ls from "../../../app/utils/utils";

export interface Item {
	url: string;
	timeStamp: string;
}

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	url!: string;
	urlModel: any;
	urlsArray: any = {};

	constructor(
		private authService: AuthService,
		public dataService: DataService
	) {}

	ngOnInit(): void {}

	onSubmit() {
		// console.log("onSubmit");
		this.dataService.setData();
	}
}

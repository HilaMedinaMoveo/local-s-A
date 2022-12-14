import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
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
	listOfurls: Item[] = [];
	urlModel: any;
	urlsArray: any = {};

	constructor(private authService: AuthService) {}
	ngOnInit() {}

	onSmbit() {
		if (this.listOfurls.length >= 5) {
			this.listOfurls = this.listOfurls.slice(1);
		}
		this.listOfurls.push({
			url: this.url,
			timeStamp: new Date().toISOString(),
		});
		ls.set("Url", JSON.stringify(this.listOfurls));
		this.listOfurls = JSON.parse(ls.get("Url") || "{}");
		console.log(this.listOfurls);
		this.url = "";
	}
}

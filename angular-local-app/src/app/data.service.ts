import { Injectable } from "@angular/core";
import { Item } from "./components/dashboard/dashboard.component";
import ls from "../app/utils/utils";

@Injectable({
	providedIn: "root",
})
export class DataService {
	url!: string;
	listOfurls: Item[] = [];

	constructor() {
		console.log(this.listOfurls);
		console.log(this.initItems("Url"));
	}

	setData() {
		if (this.listOfurls.length >= 5) {
			this.listOfurls = this.listOfurls.slice(1);
		}
		// console.log("List of");
		// console.log("hhh", this.listOfurls);
		this.listOfurls.push({
			url: this.url,
			timeStamp: new Date().toISOString(),
		});
		ls.set("Url", JSON.stringify(this.listOfurls));
		this.listOfurls = JSON.parse(ls.get("Url") || "{}");
		console.log(this.listOfurls);
		this.url = "";
	}

	initItems(url: string) {
		if ((this.listOfurls = JSON.parse(ls.get("Url"))))
			console.log("data", this.listOfurls);
		else console.log("is null");
	}
}

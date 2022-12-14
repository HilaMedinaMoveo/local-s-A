import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Item } from "./components/dashboard/dashboard.component";
import { DataService } from "./data.service";
// import ls from "../../src/app/utils/utils";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	constructor() {}

	ngOnInit() {}
}

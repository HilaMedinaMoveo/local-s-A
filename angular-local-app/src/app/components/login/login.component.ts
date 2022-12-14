import { Component } from "@angular/core";
import ls from "../../../app/utils/utils";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	email!: string;
	user: any = {};
	userEmail: any;
	authenticatedUser!: boolean;

	constructor() {}

	login() {
		if (this.email == "demo@skills.co.il") {
			this.user = {
				email: "demo@skills.co.il",
			};
			console.log(this.user);
			ls.set("User", JSON.stringify(this.user));
		} else {
			alert("Unauthorized email address");
		}
	}

	// 	logout() {
	// 		ls.remove("User");
	// 	}
}

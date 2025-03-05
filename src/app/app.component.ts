import type { OnInit } from "@angular/core";

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";

import { Router, RouterOutlet } from "@angular/router";
import { Subscription } from "rxjs";
import { LayoutComponent } from "./components/layout/layout.component";
import { StateService } from "./state.service";

@Component({
  selector: "app-root",
  imports: [LayoutComponent, RouterOutlet],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);

  subscription: Subscription;

  constructor(private stateService: StateService) {
    this.subscription = this.stateService.filter$.subscribe((filter) => {
      this.router.navigate(["/map"], {
        queryParams: { filter },
      });
    });
  }

  ngOnInit() {
    console.log("app-root");
  }
}

import type { OnInit } from "@angular/core";

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from "@angular/core";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-loader";

import { Router, RouterOutlet } from "@angular/router";
import { Subscription } from "rxjs";
import { LayoutComponent } from "./components/layout/layout.component";
import { StateService } from "./state.service";

setAssetPath(
  "https://cdn.jsdelivr.net/npm/@esri/calcite-components@3.0.0-next.120/dist/calcite/assets",
);

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

  selectedItem: string | null = null;

  subscription: Subscription;

  constructor(private stateService: StateService) {
    this.subscription = this.stateService.filter$.subscribe((filter) => {
      this.selectedItem = filter;
      this.router.navigate(["/map"], {
        queryParams: { filter: this.selectedItem },
      });
    });
  }

  ngOnInit() {
    console.log("app-root");
  }
}

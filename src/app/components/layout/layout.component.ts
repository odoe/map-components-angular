import type { OnInit } from "@angular/core";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { NavigationEnd, Router, RouterLink } from "@angular/router";

import { filter } from "rxjs/operators";

import "@esri/calcite-components/components/calcite-menu";
import "@esri/calcite-components/components/calcite-menu-item";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";
import "@esri/calcite-components/components/calcite-shell";

@Component({
  selector: "app-layout",
  imports: [RouterLink],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutComponent implements OnInit {
  isHome = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHome = event.url === "/home" || event.url === "/";
      });
  }
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@esri/calcite-components/components/calcite-navigation-logo";

@Component({
  selector: "app-layout",
  imports: [],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutComponent {}

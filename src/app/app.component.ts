import type { OnInit } from "@angular/core";

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-loader";

import "@arcgis/core/assets/esri/themes/dark/main.css";

import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { MapComponent } from "./components/map/map.component";

setAssetPath(
  "https://cdn.jsdelivr.net/npm/@esri/calcite-components@3.0.0-next.120/dist/calcite/assets",
);

@Component({
  selector: "app-root",
  imports: [HomeComponent, LayoutComponent, MapComponent],
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  selectedItem: string | null = null;
  onSelectedItemChange(selectedItem: string | null) {
    this.selectedItem = selectedItem;
  }
  ngOnInit() {
    console.log("app-root");
  }
}

import type { OnInit } from "@angular/core";
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  viewChild,
} from "@angular/core";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@arcgis/core/assets/esri/themes/dark/main.css";

import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-legend";

setAssetPath(
  "https://cdn.jsdelivr.net/npm/@esri/calcite-components@3.0.0-next.120/dist/calcite/assets",
);

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapComponent implements OnInit {
  myMap = viewChild<ElementRef<HTMLArcgisMapElement>>("myMap");

  arcgisViewReadyChange(event: HTMLArcgisMapElement["arcgisViewReadyChange"]) {
    console.log("View ready", this.myMap()?.nativeElement);
    console.log("MapView ready", event);
  }

  ngOnInit() {
    console.log("OnInit");
  }
}

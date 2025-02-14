import type { OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { StateService } from "./state.service";

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  viewChild,
} from "@angular/core";

import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-loader";

import "@arcgis/core/assets/esri/themes/dark/main.css";

setAssetPath(
  "https://cdn.jsdelivr.net/npm/@esri/calcite-components@3.0.0-next.120/dist/calcite/assets",
);

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  constructor(private stateService: StateService) {}
  items: string[] = [];
  async loadData() {
    const { types } = await this.stateService.loadData();
    this.items = types;
  }
  ngOnInit() {
    console.log("OnInit");
    this.loadData();
  }
}

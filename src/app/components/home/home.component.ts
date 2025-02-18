import type { OnInit } from "@angular/core";
import { StateService } from "../../state.service";

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import "@esri/calcite-components/components/calcite-action";
import "@esri/calcite-components/components/calcite-alert";
import "@esri/calcite-components/components/calcite-list";
import "@esri/calcite-components/components/calcite-list-item";
import "@esri/calcite-components/components/calcite-loader";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  items: string[] = [];
  selectedItem: string | null = null;

  constructor(private stateService: StateService) {}

  updateSelectedItem(item: string) {
    this.selectedItem = item;
    this.stateService.setFilter(this.selectedItem);
  }
  async loadData() {
    const { types } = await this.stateService.loadData();
    this.items = types;
  }
  ngOnInit() {
    this.loadData();
  }
}

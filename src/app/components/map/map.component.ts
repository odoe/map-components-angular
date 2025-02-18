import type { OnInit } from "@angular/core";
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  Input,
} from "@angular/core";

import "@arcgis/map-components/dist/components/arcgis-expand";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-search";
import "@arcgis/map-components/dist/components/arcgis-zoom";

import { ActivatedRoute } from "@angular/router";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.css",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  @Input() filter: string = "";

  arcgisViewReadyChange(event: HTMLArcgisMapElement["arcgisViewReadyChange"]) {
    const element = event.target;
    const layer = new FeatureLayer({
      portalItem: {
        id: "a453b9a8ccae4c178ae28621c62307bf",
      },
      definitionExpression: `fuel1 = '${this.filter}'`,
    });

    element.addLayer(layer);

    layer.when(() => {
      element.extent = layer.fullExtent!;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.filter = params["filter"];
    });
  }
}

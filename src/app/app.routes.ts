import type { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "map",
    loadComponent: () =>
      import("./components/map/map.component").then((m) => m.MapComponent),
  },
];

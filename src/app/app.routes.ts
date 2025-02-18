import type { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "map",
    loadComponent: () =>
      import("./components/map/map.component").then((m) => m.MapComponent),
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

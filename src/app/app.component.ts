import { Component } from "@angular/core";
import { entities } from "./data";

// probability
// impact

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public entities = entities;
  public colors = [
    "#00ce00",
    "#00ce00",
    "#6c9712",
    "#6c9712",
    "#f1b301",
    "#e97600",
    "#e97600",
    "#df1627",
    "#df1627"
  ];

  getColorAccordingIndex(index: number): string {
    return this.colors[index] ? this.colors[index] : "white";
  }

  handleColClick(probability: number, impact: number): void {
    console.info({
      probability,
      impact
    });
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item-counter",
  templateUrl: "./item-counter.component.html",
  styleUrls: ["./item-counter.component.scss"],
})
export class ItemCounterComponent implements OnInit {
  @Input() items: any;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  items = ["Milk", "Bread", "Cheese"];

  constructor() {}

  ngOnInit(): void {}

  deleted(deletedItem: any) {
    this.items = this.items.filter((item) => item !== deletedItem);
  }
}

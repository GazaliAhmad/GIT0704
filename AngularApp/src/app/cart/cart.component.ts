import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  items = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().subscribe((res: any) => {
      this.items = res;
    });
  }

  deleted(deletedItem: any) {
    this.items = this.items.filter((item: any) => item !== deletedItem);
  }
}

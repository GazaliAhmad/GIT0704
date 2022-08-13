import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get<any>("assets/cart.json");
  }
}

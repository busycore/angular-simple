import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  produtos: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.produtos = products;
      console.log(products);
    });
  }
}

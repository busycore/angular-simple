import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  propLegal = "qualquer";

  produto: Product = { name: "Chave", price: 10 };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.produto).subscribe(() => {
      // /\Subscribe deals with the callback
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}

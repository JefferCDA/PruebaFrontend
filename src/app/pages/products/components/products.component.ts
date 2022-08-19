import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../interfaces/product.interface';
import { ProductsService } from './../../../services/products/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor( private productsService : ProductsService) {}
  products: Product[] = [];
  ngOnInit() {
    this.products = this.productsService.getAllProducts();
    this.verificarProductoSelect();
  }

  counter = 0;
  totalsell = 0;

  verificarProductoSelect() {
    for (let index = 0; index < this.products.length; index++) {
      this.productsService.verificarProducto.push(false);
    }
  }

  addproduct(i: number) {
    this.products[i].cant += 1;
    this.totalsell += this.products[i].price;

    if (this.productsService.verificarProducto[i] == true) {
      let indexModificado = 0;
      for (let index = 0; index < this.productsService.productSelect.length; index++) {
        if (this.products[i].name == this.productsService.productSelect[index][1]) {
          indexModificado = index;
        }
      }
      this.productsService.productSelect[indexModificado][0] += 1;
    } else {
      this.productsService.verificarProducto[i] = true;
      this.productsService.productSelect.push([this.products[i].cant, this.products[i].name]);
    }
  }
  subtractproduct(i: number) {
    if (this.products[i].cant > 1) {
      this.products[i].cant -= 1;
      this.totalsell -= this.products[i].price;
      this.productsService.productSelect[i][0] -= 1;
    } else {
      this.products[i].cant -= 1;
      this.totalsell -= this.products[i].price;
      this.productsService.verificarProducto[i] = false;
      this.productsService.productSelect[i][0] -= 1;
      this.productsService.productSelect.splice(i, 1);
    }
  }

  verArray() {
    console.log(this.productsService.productSelect);
    console.log(this.productsService.verificarProducto);
  }
}

import { Injectable } from '@angular/core';
import { Product } from './../../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }
  public productSelect: any[] = [];
  public verificarProducto: boolean[] = [];

  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      imgUrl: 'assets/images/img1.jpg',
      price: 100,
      cant: 0,
    },
    {
      id: '2',
      name: 'Producto 2',
      imgUrl: 'assets/images/img2.jpg',
      price: 200,
      cant: 0,
    },
    {
      id: '3',
      name: 'Producto 3',
      imgUrl: 'assets/images/img3.jpg',
      price: 300,
      cant: 0,
    },
    {
      id: '4',
      name: 'Producto 4',
      imgUrl: 'assets/images/img4.jpg',
      price: 400,
      cant: 0,
    },
    {
      id: '5',
      name: 'Producto 5',
      imgUrl: 'assets/images/img5.jpg',
      price: 500,
      cant: 0,
    },
    {
      id: '6',
      name: 'Producto 6',
      imgUrl: 'assets/images/img6.jpg',
      price: 600,
      cant: 0,
    },
    {
      id: '7',
      name: 'Producto 7',
      imgUrl: 'assets/images/img7.jpg',
      price: 700,
      cant: 0,
    },
    {
      id: '8',
      name: 'Producto 8',
      imgUrl: 'assets/images/img8.jpg',
      price: 800,
      cant: 0,
    },
  ];

  public getAllProducts(){
      return this.products;
  }
  public getProduct(id: Number){

  }

}

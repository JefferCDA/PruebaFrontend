import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TmVentaComponent } from './../../../components/tm-venta/tm-venta.component'
import { ProductsService } from './../../../services/products/products.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  totalSell=0;
  view = false;
  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
     ) { }

  productsSelected = this.productsService.productSelect;
  imgLogo = "assets/images/logo.png";
  imgList = "assets/images/ImgList.png";
  ngOnInit(): void {
  }

  total(total: any){
    this.totalSell = total;
  }
  openModalSell():void{
    const dialogRef = this.dialog.open(TmVentaComponent)
    console.log(this.productsSelected);
  }
  openView(){
    this.view=true;
  }
}

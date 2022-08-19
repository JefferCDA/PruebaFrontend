import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tm-venta',
  templateUrl: './tm-venta.component.html',
  styleUrls: ['./tm-venta.component.scss']
})
export class TmVentaComponent implements OnInit {
  sellActive = false;

  constructor(
    public dialogRef: MatDialogRef<TmVentaComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  activesell(){
    this.sellActive= true;
  }
}

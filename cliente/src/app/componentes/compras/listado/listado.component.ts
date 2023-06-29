import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CompraCabecera,
  CompraDetalle,
  CompraCabeceraConProveedorSimple,
} from 'src/app/modelos/compras';
import { ComprasService } from 'src/app/servicios/compras.service';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComprasComponent implements OnInit {
  compData: CompraCabeceraConProveedorSimple[] = [];
  titulo: string = 'Alta de Compra';
  comprobante: number = 0;
  comprasDetalleData: any = [];

  constructor(private compraService: ComprasService, private router: Router) {}

  ngOnInit() {
    this.getComprasCabecera();
  }

  getComprasCabecera() {
    this.compraService.getComprasCabecera().subscribe((res) => {
      this.compData = res;
    });
  }

  obtengoComprobante(comprobante: number) {
    this.comprobante = comprobante;
    this.comprasDetalleData = this.compraService
      .getCompraDetalle(comprobante)
      .subscribe((res) => {
        this.comprasDetalleData = res;
        console.log(this.comprasDetalleData);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasDetalle } from 'src/app/modelos/ventas';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoVentasComponent implements OnInit {
  ventasData: any = [];
  comprobante: number = 0;
  ventasDetalleData: any = [];
  total: any = [];

  ngOnInit(): void {
    this.getVentasCabecera();
  }

  constructor(private ventasService: VentasService, private router: Router) {}
  getVentasCabecera() {
    this.ventasService.getVentasCabecera().subscribe((res) => {
      this.ventasData = res;
    });
  }

  eliminarVenta(id: number, comp: number) {
    if (
      confirm(
        'Si elimina la cabecera se eliminará todo el contenido del comprobante. ¿Desea Eliminar? '
      )
    ) {
      console.log('Comprobante: ', comp);
      console.log('id cabecera: ', id);

      this.ventasService.deleteVentaCabecera(id).subscribe((res) => {
        console.log(res);
        this.getVentasCabecera();
      });
      this.ventasService.deleteVentasDetalle(comp).subscribe((res) => {
        console.log(res);
        this.getVentasCabecera();
      });
    }
  }
  obtengoComprobante(comprobante: number) {
    this.comprobante = comprobante;
    this.ventasDetalleData = this.ventasService
      .getVentaDetallexComprobante(comprobante)
      .subscribe((res) => {
        this.ventasDetalleData = res;
      });
    //this.totalizar(comprobante);
  }

  // totalizar(comprobante: number) {
  //   return this.ventasService.getTotal(comprobante).subscribe((res) => {
  //     this.total = res;
  //   });
  //}
}

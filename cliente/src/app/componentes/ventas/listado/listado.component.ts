import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoVentasComponent implements OnInit {
  ventasData: any = [];
  comprobante: number = 0;

  ngOnInit(): void {
    this.getVentasCabecera();
  }
  constructor(private ventasService: VentasService, private router: Router) {}
  getVentasCabecera() {
    this.ventasService.getVentasCabecera().subscribe((res) => {
      this.ventasData = res;
    });
  }

  editarVenta(id: string) {
    console.log(id);
  }
  eliminarVenta(id: string) {
    if (
      confirm(
        'Si elimina la cabecera se eliminará todo el contenido del comprobante. ¿Desea Eliminar? '
      )
    ) {
      this.ventasService.deleteVentaCabecera(id).subscribe((res) => {
        console.log(res);
        this.getVentasCabecera();
      });
    }
  }
  obtengoComprobante(comprobante: number) {
    this.comprobante = comprobante;
  }
}

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

  ngOnInit(): void {
    this.getVentas();
  }
  constructor(private ventasService: VentasService, private router: Router) {}
  getVentas() {
    this.ventasService.getVentas().subscribe((res) => {
      this.ventasData = res;
    });
  }

  editarVenta(id: string) {
    console.log(id);
  }
  eliminarVenta(id: string) {
    console.log(id);
  }
}

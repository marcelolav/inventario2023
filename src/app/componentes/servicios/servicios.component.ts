import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from 'src/app/servicios/servicios.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  public columnas = ['id', 'cliente', 'telefono', 'ingreso', 'salida', 'articulo', 'falla', 'observaciones', 'precioreparacion'];
  public dataSource = new MatTableDataSource();
  constructor(private serviciosService: ServiciosService) { }
  async ngOnInit() {
    await this.obtenerServicios();
  }

  async obtenerServicios() { 
    this.dataSource.data = await this.serviciosService.obtenerServicios();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  public columnas = ['id','fecha', 'producto', 'cantidad', 'precio' ];
  public dataSource = new MatTableDataSource();

  constructor(private ventasService: VentasService) { }

  ngOnInit() {
    this.obtenerVentas();
  }
  
  async obtenerVentas() {
    this.dataSource.data = await this.ventasService.obtenerVentas();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

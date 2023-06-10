import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Carrito } from '../../modelos/carrito';
import { testingChangesService } from '../../servicios/testing-changes.service';

@Component({
  selector: 'app-testing-changes',
  templateUrl: './testing-changes.component.html',
  styleUrls: ['./testing-changes.component.css']
})
export class TestingChangesComponent implements OnInit{
  columnas = ['producto', 'cantidad', 'precio' ];
  datosCarrito = new MatTableDataSource<Carrito>();

  constructor(private testService: testingChangesService) {}

  ngOnInit() {
    this.testService.getCarrito().subscribe(carrito => {
      this.datosCarrito.data = carrito;
      console.log(carrito);
    });
  }
}

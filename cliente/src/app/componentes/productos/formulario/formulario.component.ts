import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioProductosComponent implements OnInit {


  producto: Producto = {
    idproducto: 0,
    codigobarra: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    preciocompra: 0,
    existencia: 0,
    preciorefdolar: 0,
    rubroid: 0,
  };


  constructor(private productosService: ProductosService) { }

  ngOnInit() {

  }

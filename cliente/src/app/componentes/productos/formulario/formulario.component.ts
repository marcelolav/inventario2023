import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/servicios/productos.service';
import { RubrosService } from 'src/app/servicios/rubros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rubro } from 'src/app/modelos/rubros';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioProductosComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta Productos';
  rubros: any = [];
  producto: Producto = {
    idproducto: 0,
    codigobarra: '',
    nombreproducto: '',
    descripcion: '',
    precio: 0,
    preciocompra: 0,
    existencia: 0,
    preciorefdolar: 0,
    rubroid: 0,
  };

  constructor(
    private productosService: ProductosService,
    private rubrosService: RubrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.obtenerRubros();
    if (id) {
      this.titulo = 'Modificación del Producto';
      this.editar = true;
      const buscaProv = this.productosService
        .getProducto(id)
        .subscribe((data) => {
          this.producto = data;
        });
    } else {
      this.titulo = 'Alta Producto';
      this.editar = false;
      this.producto = {
        idproducto: 0,
        codigobarra: '',
        nombreproducto: '',
        descripcion: '',
        precio: 0,
        preciocompra: 0,
        existencia: 0,
        preciorefdolar: 0,
        rubroid: 0,
      };
    }
  }

  cancelar(): void {
    this.router.navigate(['/productos']);
  }

  actualizaProducto(
    idproducto?: any,
    codigobarra?: any,
    nombre?: any,
    descripcion?: any,
    precio?: any,
    preciocompra?: any,
    existencia?: any,
    preciorefdolar?: any,
    rubroid?: any
  ): void {
    this.producto = {
      idproducto: idproducto,
      codigobarra: codigobarra,
      nombreproducto: nombre,
      descripcion: descripcion,
      precio: precio,
      preciocompra: preciocompra,
      existencia: existencia,
      preciorefdolar: preciorefdolar,
      rubroid: rubroid,
    };
    this.productosService
      .updateProducto(idproducto, this.producto)
      .subscribe((res) => {
        this.editar = false;
        this.router.navigate(['/productos']);
      });
  }
  obtenerRubros() {
    this.rubrosService.getRubros().subscribe((data) => {
      this.rubros = data;
    });
  }
  guardaProducto(producto: Producto) {
    this.productosService.saveProducto(producto).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/productos']);
    });
  }
}

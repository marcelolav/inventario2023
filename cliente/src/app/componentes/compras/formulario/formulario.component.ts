import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/modelos/compras';
import { ProductoRubro } from 'src/app/modelos/productos';
import { ComprasService } from 'src/app/servicios/compras.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComprasComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta de Compras';
  compras: any = [];
  proveedores: any = [];
  productos: ProductoRubro[] = [];
  producto: ProductoRubro[];
  codigobarra: string = '';

  constructor(
    private compraService: ComprasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private proveedorService: ProveedoresService,
    private productosService: ProductosService
  ) {
    this.producto = [];
  }
  ngOnInit(): void {
    // Lleno array de los proveedores
    this.proveedorService.getProveedores().subscribe((prov) => {
      this.proveedores = prov;
      console.log(this.proveedores);
    });
    // Lleno array de productos
    this.productosService.getProductoyRubro().subscribe((prod) => {
      this.productos = prod;
    });
    // No lo necesito pero lo dejo por las dudas el id no viene de ninguna parte por ahora
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.titulo = 'Modificación de Compra';
      this.editar = true;
      const buscaCompra = this.compraService.getCompra(id).subscribe((data) => {
        this.compras = data;
      });
    } else {
      this.titulo = 'Alta de Compra';
      this.editar = false;
      this.compras = {};
    }
  }
  guardaCompra(compra: Compra) {
    this.compraService.saveCompra(compra).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/compras']);
    });
  }

  actualizaCompra(id: number, compra: Compra) {
    this.compraService.updateCompra(id, compra).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/compras']);
    });
  }

  buscarProducto(search: string) {
    this.productosService.buscarProducto(search).subscribe((res) => {
      const prod = res;
      const nombreprod = prod.nombreproducto;
    });
  }
}

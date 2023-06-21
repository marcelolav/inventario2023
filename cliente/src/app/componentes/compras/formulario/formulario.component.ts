import { Component, OnInit } from '@angular/core';
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
  productos: ProductoRubro[];
  producto: ProductoRubro[];
  idprod: number = 0;
  codigobarra: string = '';
  nomprod: string = '';
  precprod: number = 0;
  cantprod: number = 0;
  subtotal: number = 0;
  refDolar: number = 0;
  regCompra: Compra = {};
  listaComprasActual: any = [];

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
    this.productosService.buscarProducto(search).subscribe((data: any) => {
      this.nomprod = data.nombreproducto;
      this.precprod = data.preciocompra;
      this.idprod = data.idproductos;
      this.refDolar = data.preciorefdolar;
    });
  }

  agregarItem() {
    // Generar registro de compra
    this.regCompra = {
      idproveedores: this.compras.idproveedores,
      comprobante: this.compras.comprobante,
      idproductos: this.idprod,
      fechacompra: this.compras.fechacompra,
      cantidad: this.cantprod,
      preciocompra: this.precprod,
      subtotal: this.subtotal,
      preciocompradolar: this.refDolar,
      //aca poner la referencia al dolar del dia... ver api dolarsi o dolarhoy o dolarreputisimamadrequelopario
    };
    this.compraService.saveCompra(this.regCompra).subscribe((res) => {
      console.log(res);
      this.actualizaListaCompra(this.compras.comprobante);
    });
  }

  calculoSubtotal(cant: number, prec: number) {
    this.subtotal = cant * prec;
  }

  actualizaListaCompra(comprobante: number) {
    this.compraService.getCompraComprobante(comprobante).subscribe((res) => {
      this.listaComprasActual = res;
      console.log(this.listaComprasActual);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/servicios/compras.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComprasComponent implements OnInit {
  provdatos: any;
  fecha: Date;
  comprobante: number;
  proveedorSeleccionado: any;
  productoSeleccionado: any;
  precioProducto: number;
  cantidadProducto: number;
  subtotal: number;
  totalCompra: number;
  itemCompleto: any;
  items: any;
  registroCabecera: any;
  cantidadAnterior: number;

  constructor(
    private compraService: ComprasService,
    private proveedorService: ProveedoresService,
    private productosService: ProductosService
  ) {
    this.provdatos = [];
    this.fecha = new Date();
    this.comprobante = 0;
    this.proveedorSeleccionado = [];
    this.productoSeleccionado = [];
    this.precioProducto = 0;
    this.cantidadProducto = 0;
    this.subtotal = 0;
    this.totalCompra = 0;
    this.itemCompleto = [];
    this.items = [];
    this.registroCabecera = [];
    this.cantidadAnterior = 0;
  }
  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe((proveedores) => {
      this.provdatos = proveedores;
    });
  }

  capturarProveedor(idprov: number) {
    this.proveedorService.getProveedor(idprov).subscribe((res) => {
      this.proveedorSeleccionado = res;
    });
  }

  addProducto(evento: any) {
    const codProd: string = evento.target.value;
    if (codProd.length > 3) {
      this.productosService.buscarProducto(codProd).subscribe((res) => {
        this.productoSeleccionado = res;
        this.precioProducto = this.productoSeleccionado.precio;
      });
    }
  }
  calculoSubtotal(cant: number, prec: number) {
    this.subtotal = cant * prec;
  }

  agregarCabeceraCompra() {
    this.registroCabecera = {
      fecha: this.fecha,
      comprobante_cabecera: this.comprobante,
      idproveedores: this.provdatos.idproveedores,
      totalcompra: this.totalCompra,
    };
  }

  agregaItem() {
    this.totalCompra = this.totalCompra + this.subtotal;
    this.itemCompleto = {
      comprobante_detalle: this.comprobante,
      idproductos: this.productoSeleccionado.idproductos,
      precioproducto: this.productoSeleccionado.nombreproducto,
      cantidadproducto: this.cantidadProducto,
      subtotalproducto: this.precioProducto,
    };
    this.items.push(this.itemCompleto);
    this.vaciarCamposItem();
    this.agregarCabeceraCliente();
  }

  vaciarCamposItem() {
    // producto
    this.productoSeleccionado = [];
    this.cantidadProducto = 0;
    this.precioProducto = 0;
    this.subtotal = 0;
  }
  cancelarCompraTotal() {
    if (confirm('Confirma Cancelar todos los items de Compra')) {
      this.items = {};
      this.provdatos = [];
      this.comprobante = 0;
      this.proveedorSeleccionado = [];
      this.vaciarCamposItem();
    }
  }

  grabarRegistroCompra() {
    this.compraService.save(this.registro_cabecera).subscribe((res) => {
      console.log(res);
    });
    this.items.forEach((reg: any) => {
      this.ventasService.saveVentaDetalle(reg).subscribe((res) => {
        console.log(res);
        this.ventasService
          .updateExistencia(reg.idproductos_detalle, reg.cantidad)
          .subscribe((res) => {
            console.log(res);
          });
      });
    });
    this.items = {};
    this.clidatos = [];
    this.comprobante = 0;
    this.clienteSeleccionado = [];
    this.vaciarCamposItem();
  }
}

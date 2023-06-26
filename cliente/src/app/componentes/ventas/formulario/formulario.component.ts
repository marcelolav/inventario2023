import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-formulario-ventas',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioVentasComponent implements OnInit {
  clidatos: any;
  fecha: Date;
  comprobante: number = 0;
  clienteSeleccionado: any;
  productoSeleccionado: any;
  precioprd: number;
  cantprd: number;
  subtotal: number;
  totalventa: number;
  itemCompleto: any;
  items: any;

  registro_cabecera: any;

  constructor(
    private ventasService: VentasService,
    private clientesService: ClientesService,
    private productosService: ProductosService
  ) {
    this.clidatos = [];
    this.fecha = new Date();
    this.comprobante = 0;
    this.clienteSeleccionado = [];
    this.productoSeleccionado = [];
    this.precioprd = 0;
    this.cantprd = 0;
    this.subtotal = 0;
    this.totalventa = 0;
    this.itemCompleto = [];
    this.items = [];
    this.registro_cabecera = [];
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((res) => {
      this.clidatos = res;
    });
    console.log(this.items);
  }

  capturarCliente(idcli: number) {
    this.clientesService.getCliente(idcli).subscribe((res) => {
      this.clienteSeleccionado = res;
    });
  }

  addProducto(evento: any) {
    const codProd: string = evento.target.value;
    if (codProd.length > 3) {
      this.productosService.buscarProducto(codProd).subscribe((res) => {
        this.productoSeleccionado = res;
        this.precioprd = this.productoSeleccionado.precio;
      });
    }
  }
  calculoSubtotal(cant: number, prec: number) {
    this.subtotal = cant * prec;
  }

  agregarCabeceraCliente() {
    this.registro_cabecera = {
      fecha: this.fecha,
      comprobante_cabecera: this.comprobante,
      idclientes_cabecera: this.clidatos.idclientes,
      totalventa: this.totalventa,
    };
  }

  agregaItem() {
    this.totalventa = this.totalventa + this.subtotal;
    this.itemCompleto = {
      comprobante_detalle: this.comprobante,
      idproductos_detalle: this.productoSeleccionado.idproductos,
      cantidad: this.cantprd,
      importe: this.precioprd,
      subtotal: this.subtotal,
    };
    this.items.push(this.itemCompleto);
    console.log(this.itemCompleto);
    this.vaciarCamposItem();
    this.agregarCabeceraCliente();
  }

  vaciarCamposItem() {
    // producto
    this.productoSeleccionado = [];
    this.cantprd = 0;
    this.precioprd = 0;
    this.subtotal = 0;
  }

  cancelarVentaTotal() {
    if (confirm('Confirma Cancelar todos los items de Venta')) {
      this.items = {};
      this.clidatos = [];
      this.comprobante = 0;
      this.clienteSeleccionado = [];
      this.vaciarCamposItem();
    }
  }

  grabarRegistros() {
    this.ventasService
      .saveVentaCabecera(this.registro_cabecera)
      .subscribe((res) => {
        console.log(res);
      });
    this.items.forEach((reg: any) => {
      this.ventasService.saveVentaDetalle(reg).subscribe((res) => {
        console.log(res);
      });
    });
    this.items = {};
    this.clidatos = [];
    this.comprobante = 0;
    this.clienteSeleccionado = [];
    this.vaciarCamposItem();
  }
}

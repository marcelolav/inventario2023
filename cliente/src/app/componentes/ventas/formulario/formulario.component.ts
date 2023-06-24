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
  clidatos: any = [];
  clienteSeleccionado: any = [];
  productoSeleccionado: any = [];
  precioprd: number = 0;

  constructor(
    private ventasService: VentasService,
    private clientesService: ClientesService,
    private productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe((res) => {
      this.clidatos = res;
    });
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
        console.log(this.productoSeleccionado);
        this.precioprd = this.productoSeleccionado.precio;
      });
    }
  }
}

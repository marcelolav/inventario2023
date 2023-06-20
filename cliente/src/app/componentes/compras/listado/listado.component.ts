import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra, CompraExtendido } from 'src/app/modelos/compras';
import { ComprasService } from 'src/app/servicios/compras.service';

@Component({
  selector: 'app-listado-compras',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComprasComponent implements OnInit {
  compData: CompraExtendido[] = [];
  titulo: string = 'Alta de Compra';
  public page: number = 0;
  public search: string = '';
  constructor(private compraService: ComprasService, private router: Router) {}

  ngOnInit() {
    this.getCompras();
  }

  getCompras() {
    this.compraService.getCompras().subscribe((res) => {
      this.compData = res;
    });
  }

  // editarCompra(id: number) {
  //   this.router.navigate(['/compras/editar/' + id]);
  // }

  eliminarCompra(id: number) {
    if (confirm('Confirma que desea eliminar una compra') === true) {
      this.compraService.deleteCompra(id).subscribe((res) => {
        this.getCompras();
      });
    }
  }
  calculaSubtotal(cantidad: number, precio: number) {
    return cantidad * precio;
  }
  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) this.page -= 5;
  }
  onSearchCompra(search: string) {
    this.page = 0;
    this.search = search;
  }
}

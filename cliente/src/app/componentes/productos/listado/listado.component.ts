import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import {
  ProductosDirective,
  SortEvent,
  compare,
} from '../../../directivas/productos.directive';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  @ViewChildren(ProductosDirective)
  headers: QueryList<ProductosDirective>;

  prodData: any = [];
  titulo: string = 'Alta de Producto';

  constructor(private prodServ: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.prodServ.getProductoyRubro().subscribe((res) => {
      this.prodData = res;
    });
  }

  editarProducto(id: string) {
    this.router.navigate(['/productos/editar/' + id]);
  }

  eliminarProducto(id: string) {
    this.prodServ.deleteProducto(id).subscribe((res) => {
      this.getProductos();
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    // sorting countries
    if (direction === '' || column === '') {
      this.prodData = this.prodData;
    } else {
      this.prodData = [...this.prodData].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
}

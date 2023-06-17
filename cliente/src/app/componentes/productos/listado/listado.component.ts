import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoRubro } from 'src/app/modelos/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoProductosComponent implements OnInit {
  prodData: ProductoRubro[] = [];
  titulo: string = 'Alta de Producto';

  public page: number = 0;
  public search: string = '';

  constructor(private prodServ: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.prodServ.getProductoyRubro().subscribe((prodData) => {
      this.prodData = prodData;
    });
  }

  editarProducto(id: number) {
    this.router.navigate(['/productos/editar/' + id]);
  }

  eliminarProducto(id: number) {
    this.prodServ.deleteProducto(id).subscribe((res) => {
      this.getProductos();
    });
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) this.page -= 5;
  }

  onSearchProducto(search: string) {
    this.page = 0;
    this.search = search;
  }
}

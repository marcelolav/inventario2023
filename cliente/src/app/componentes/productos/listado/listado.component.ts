import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoProductosComponent implements OnInit {
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
}

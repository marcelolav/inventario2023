import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedor, ProveedorListado } from 'src/app/modelos/proveedores';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoProveedoresComponent implements OnInit {
  provData: ProveedorListado[] = [];
  titulo: string = 'Alta de Proveedor';
  public page: number = 0;
  public search: string = '';

  constructor(private provServ: ProveedoresService, private router: Router) {}

  ngOnInit(): void {
    this.getProveedor();
  }

  getProveedor() {
    this.provServ.getProveedores().subscribe((res) => {
      this.provData = res;
    });
  }
  editarProveedor(id: number) {
    this.router.navigate(['/proveedores/editar/' + id]);
  }

  eliminarProveedor(id: number) {
    this.provServ.deleteProveedor(id).subscribe((res) => {
      this.getProveedor();
    });
  }
  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) this.page -= 5;
  }

  onSearchProveedor(search: string) {
    this.page = 0;
    this.search = search;
  }
}

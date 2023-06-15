import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-listado-proveedores',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoProveedoresComponent implements OnInit {
  provData: any = [];
  titulo: string = 'Alta de Proveedor';

  constructor(private provServ: ProveedoresService, private router: Router) {}

  ngOnInit(): void {
    this.getProveedor();
  }

  getProveedor() {
    this.provServ.getProveedores().subscribe((res) => {
      this.provData = res;
    });
  }
  editarProveedor(id: string) {
    this.router.navigate(['/proveedores/editar/' + id]);
  }

  eliminarProveedor(id: string) {
    this.provServ.deleteProveedor(id).subscribe((res) => {
      this.getProveedor();
    });
  }
}

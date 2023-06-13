import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/modelos/proveedores';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-proveedores',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioProveedoresComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta Proveedor';

  proveedor: Proveedor = {
    idproveedor: 0,
    nombre: '',
    referencia: '',
    fechaultimacompra: new Date(),
    totalcompras: 0,
  };
  constructor(
    private proveedoresService: ProveedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.titulo = 'Modificación del Proveedor';
      this.editar = true;
      const buscaProv = this.proveedoresService
        .getProveedor(id)
        .subscribe((data) => {
          this.proveedor = data;
        });
      console.log(this.proveedor);
    } else {
      this.titulo = 'Alta Proveedor';
      this.editar = false;
      this.proveedor = {
        idproveedor: 0,
        nombre: '',
        referencia: '',
        fechaultimacompra: new Date(),
        totalcompras: 0,
      };
    }
  }

  cancelar(): void {
    this.router.navigate(['/proveedores']);
  }

  actualizaProveedor(
    id?: any,
    nombre?: any,
    referencia?: any,
    fechaultimacompra?: any,
    totalcompras?: any
  ): void {
    this.proveedor = {
      idproveedor: id,
      nombre: nombre,
      referencia: referencia,
      fechaultimacompra: fechaultimacompra,
      totalcompras: totalcompras,
    };
    this.proveedoresService
      .updateProveedor(id, this.proveedor)
      .subscribe((res) => {
        this.editar = false;
        this.router.navigate(['/proveedores']);
      });
  }

  guardaProveedor(proveedor: Proveedor) {
    this.proveedoresService.saveProveedor(proveedor).subscribe((res) => {
      console.log(res);
      this.editar = false;
      this.router.navigate(['/proveedores']);
    });
  }
}

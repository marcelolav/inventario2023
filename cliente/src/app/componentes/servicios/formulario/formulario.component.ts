import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/modelos/servicios';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-servicios',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioServiciosComponent implements OnInit {
  titulo: string = 'Alta de Servicio Técnico';
  editar: boolean = false;
  servicio: Servicio = {
    idservicios: 0,
    cliente: '',
    telefono: '',
    fechaingreso: new Date(),
    articulo: '',
    falla: '',
    observaciones: '',
    fechasalida: new Date('0000-00-00'),
    precioreparacion: 0,
    reparado: false,
  };
  constructor(
    private serviciosService: ServiciosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.editar = true;
      this.titulo = 'Modificación de Servicios Técnicos';
      const servData = this.serviciosService
        .getServicio(id)
        .subscribe((data) => {
          this.servicio = data;
        });
    } else {
      this.titulo = 'Alta de Servicio Técnico';
      this.editar = false;
      this.servicio = {
        idservicios: 0,
        cliente: '',
        telefono: '',
        fechaingreso: new Date(),
        articulo: '',
        falla: '',
        observaciones: '',
        fechasalida: new Date('0000-00-00'),
        precioreparacion: 0,
        reparado: false,
      };
    }
  }
  guardaServicio(servicio: Servicio) {
    this.serviciosService.saveServicio(servicio).subscribe((res) => {
      this.router.navigate(['/servicios/listado']);
    });
  }

  actualizaServicio(id: string, servAct: Servicio) {
    this.serviciosService.updateServicio(id, servAct).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/servicios/listado']);
    });
  }
}

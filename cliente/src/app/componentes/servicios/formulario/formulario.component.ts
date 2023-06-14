import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/modelos/servicios';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-servicios',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioServiciosComponent implements OnInit {
  titulo: string = 'Alta de Servicio Técnico';
  servicio: Servicio;

  constructor(
    private serviciosService: ServiciosService,
    private router: Router
  ) {}

  ngOnInit() {
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
  guardaServicio(servicio: Servicio) {
    this.serviciosService.saveServicio(servicio).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/modelos/servicios';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css'],
})
export class EntregaComponent implements OnInit {
  servData: any = [];

  constructor(
    private serviciosService: ServiciosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      const servData = this.serviciosService
        .getServicio(id)
        .subscribe((data) => {
          this.servData = data;
        });
    } else {
      this.router.navigate(['/servicios']);
    }
  }

  confirmaEntrega() {
    if (this.servData.precioreparacion != 0) {
      const regReparacion = {
        falla: this.servData.falla,
        observaciones: this.servData.observaciones,
        precioreparacion: this.servData.precioreparacion,
        fechasalida: new Date(),
        reparado: this.servData.reparado,
      };
      this.serviciosService
        .updateServicio(this.servData.idservicios, regReparacion)
        .subscribe((res) => {
          this.router.navigate(['/servicios']);
        });
    } else {
      alert('El importe no puede ser cero, indique Importe');
    }
  }
}

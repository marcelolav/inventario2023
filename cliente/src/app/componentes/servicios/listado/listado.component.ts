import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';
@Component({
  selector: 'app-listado-servicios',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoServiciosComponent implements OnInit {
  servData: any = [];

  constructor(private servService: ServiciosService, private router: Router) {}

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios() {
    this.servService.getServicios().subscribe((res) => {
      this.servData = res;
    });
  }

  editarServicio(id: string) {
    this.router.navigate(['/servicios/editar/' + id]);
  }

  eliminarServicio(id: string) {
    this.servService.deleteServicio(id).subscribe((res) => {
      this.getServicios();
    });
  }
}

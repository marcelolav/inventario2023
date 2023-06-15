import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css'],
})
export class PendientesComponent implements OnInit {
  constructor(private servService: ServiciosService, private router: Router) {}
  servData: any = [];
  ngOnInit(): void {
    this.getServicesPendientes();
  }
  entregarServicio(id: string) {
    console.log(id);
    this.router.navigate(['/servicios/entregar/' + id]);
  }
  getServicesPendientes() {
    this.servService.getPendientes().subscribe((data) => {
      this.servData = data;
    });
  }
}

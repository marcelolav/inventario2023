import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rubro } from 'src/app/modelos/rubros';
import { RubrosService } from 'src/app/servicios/rubros.service';

@Component({
  selector: 'app-formulario-rubros',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioRubrosComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta Rubro';
  rubro: Rubro = {
    idrubro: 0,
    nombre: '',
  };

  constructor(
    private rubrosService: RubrosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.titulo = 'Modificación del Rubro';
      this.editar = true;
      const buscaRuro = this.rubrosService.getRubro(id).subscribe((data) => {
        this.rubro = data;
      });
    } else {
      this.titulo = 'Alta Rubro';
      this.editar = false;
      this.rubro = {
        nombre: '',
      };
    }
  }

  cancelar(): void {
    this.router.navigate(['/rubros']);
  }

  actualizaRubro(id: any, nombre: any) {
    this.rubro = {
      idrubro: id,
      nombre: nombre,
    };
    this.rubrosService.updateRubro(id, this.rubro).subscribe((res) => {
      console.log(res);
      this.editar = false;
      this.router.navigate(['/rubros']);
    });
  }

  guardaRubro(nombre: any) {
    this.rubrosService.saveRubro(nombre).subscribe((res) => {
      console.log(res);
      this.editar = false;
      this.router.navigate(['/rubros']);
    });
  }
}

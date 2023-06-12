import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RubrosService } from 'src/app/servicios/rubros.service';
// import { Rubro} from '../../../modelos/rubros'
@Component({
  selector: 'app-listado-rubros',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoRubrosComponent implements OnInit {
  rubros: any = [];
  titulo: string = 'Alta de Rubro';
  constructor(private rubrosService: RubrosService, private router: Router) {}
  ngOnInit(): void {
    this.getRubros();
  }

  getRubros() {
    this.rubrosService.getRubros().subscribe((res) => {
      this.rubros = res;
    });
  }

  editarRubro(id: string) {
    console.log('desde listado de rubros => ', id);
    this.router.navigate(['/rubros/editar/' + id]);
  }
  eliminarRubro(id: string) {
    this.rubrosService.deleteRubro(id).subscribe((res) => {
      console.log(res);
      this.getRubros();
    });
    // this.router.navigate(['/rubros/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { RubrosService } from 'src/app/servicios/rubros.service';
// import { Rubro} from '../../../modelos/rubros'
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoRubrosComponent implements OnInit {
  rubros: any = [];

  constructor(private rubrosService: RubrosService) {}
  ngOnInit(): void {
    this.getRubros();
  }

  getRubros() {
    this.rubrosService.getRubros().subscribe((res) => {
      this.rubros = res;
    });
  }
}

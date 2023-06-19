import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RubrosService } from 'src/app/servicios/rubros.service';
import { RubroListado } from '../../../modelos/rubros';
@Component({
  selector: 'app-listado-rubros',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoRubrosComponent implements OnInit {
  rubData: RubroListado[] = [];
  titulo: string = 'Alta de Rubro';
  public page: number = 0;
  public search: string = '';

  constructor(private rubrosService: RubrosService, private router: Router) {}
  ngOnInit(): void {
    this.getRubros();
  }

  getRubros() {
    this.rubrosService.getRubros().subscribe((res) => {
      this.rubData = res;
    });
  }

  editarRubro(id: number) {
    this.router.navigate(['/rubros/editar/' + id]);
  }
  eliminarRubro(id: number) {
    this.rubrosService.deleteRubro(id).subscribe((res) => {
      this.getRubros();
    });
  }
  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) this.page -= 5;
  }
  onSearchRubro(search: string) {
    this.page = 0;
    this.search = search;
  }
}

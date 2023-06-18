import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadoCliente } from 'src/app/modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoClientesComponent implements OnInit {
  cliData: ListadoCliente[] = [];
  titulo: string = 'Alta de Clientes';

  public page: number = 0;
  public search: string = '';
  constructor(private cliServ: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.cliServ.getClientesListado().subscribe((cliData) => {
      this.cliData = cliData;
    });
  }

  editarCliente(id: number) {
    this.router.navigate(['/clientes/editar/' + id]);
  }

  eliminarCliente(id: number) {
    this.cliServ.deleteCliente(id).subscribe((res) => {
      this.getClientes();
    });
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0) this.page -= 5;
  }

  onSearchCliente(search: string) {
    this.page = 0;
    this.search = search;
  }
}

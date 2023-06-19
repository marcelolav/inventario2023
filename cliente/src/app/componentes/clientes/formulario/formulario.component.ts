import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioClientesComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta Rubro';
  cliente: Cliente = {
    // idclientes: 0,
    // nombrecliente: '',
    // telefono: '',
    // direccion: '',
    // cuit: '',
    // observaciones: ''
  };

  constructor(
    private clienteService: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.titulo = 'Modificación del Cliente';
      this.editar = true;
      const listaClientes = this.clienteService
        .getCliente(id)
        .subscribe((data) => {
          this.cliente = data;
        });
    } else {
      this.titulo = 'Alta Cliente';
      this.editar = false;
      this.cliente = {};
    }
  }

  guardaCliente(cliente: Cliente) {
    if (JSON.stringify(cliente) == '{}') {
      alert('Debe completar los datos del cliente');
    } else {
      this.clienteService.saveCliente(cliente).subscribe((res) => {
        this.editar = false;
        this.router.navigate(['/clientes']);
      });
    }
  }

  actualizaCliente(id: any, cliente: Cliente) {
    this.clienteService.updateCliente(id, cliente).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/clientes']);
    });
  }
  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}

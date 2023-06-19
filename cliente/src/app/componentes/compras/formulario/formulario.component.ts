import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Compra } from 'src/app/modelos/compras';
import { ComprasService } from 'src/app/servicios/compras.service';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComprasComponent implements OnInit {
  editar: boolean = false;
  titulo: string = 'Alta Productos';
  compras: any = [];
  constructor(
    private compraService: ComprasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.titulo = 'Modificación de Compra';
      this.editar = true;
      const buscaCompra = this.compraService.getCompra(id).subscribe((data) => {
        this.compras = data;
      });
    } else {
      this.titulo = 'Alta de Compra';
      this.editar = false;
      this.compras = {};
    }
  }
  guardaCompra(compra: Compra) {
    this.compraService.saveCompra(compra).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/compras']);
    });
  }

  actualizaCompra(id: number, compra: Compra) {
    this.compraService.updateCompra(id, compra).subscribe((res) => {
      this.editar = false;
      this.router.navigate(['/compras']);
    });
  }
}

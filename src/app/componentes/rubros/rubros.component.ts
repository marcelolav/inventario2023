import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Rubros } from 'src/app/modelos/rubros';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-rubros',
  templateUrl: './rubros.component.html',
  styleUrls: ['./rubros.component.css'],
})
export class RubrosComponent implements OnInit {
  public columnas = ['rubroid', 'nombrerubro', 'modificar', 'eliminar'];
  public dataSource = new MatTableDataSource();
  public esAlta: boolean = false;
  public esModificacion: boolean = false;

  rubroModel = new Rubros('');

  constructor(public productosService: ProductosService) {}

  ngOnInit() {
    this.obtenerRubros();
    this.esAlta = true;
    this.esModificacion = false;
  }
  async obtenerRubros() {
    this.dataSource.data = await this.productosService.obtenerRubros();
  }


  // Elimina un rubro de la lista
  eliminarRubro(id: number) {
    if (confirm('Seguro de eliminar el rubro')) {
      this.productosService.eliminarRubro(id);
      this.dataSource = new MatTableDataSource();
    }
  }
  // Boton de modificacion en el listado de rubros
  async modificarRubro(id: number) {
    this.esModificacion = true;
    this.esAlta = false;
    this.rubroModel = await this.obtenerRubro(id);
  }

  // Boton de modificar de la parte de altas de rubros
  modificaRubroFinal() {
    console.log(this.rubroModel);
    const rubroId = this.rubroModel.rubroid || 0;
    const rubroNombre = this.rubroModel.nombrerubro;
    this.productosService.modificarRubro(rubroId,rubroNombre);
    this.dataSource = new MatTableDataSource();
    this.obtenerRubros();
  }
  // Agrega un rubro a la lista
  async guardarRubro() {
    console.log(this.rubroModel.nombrerubro);
    await this.productosService.agregarRubro(this.rubroModel);
    this.dataSource = new MatTableDataSource();
    this.obtenerRubros();
  }

  // Obtener un rubro por idrubro
  async obtenerRubro(id: number) { 
    const rubro: Rubros = await this.productosService.obtenerRubro(id);
    return rubro;
  }
}

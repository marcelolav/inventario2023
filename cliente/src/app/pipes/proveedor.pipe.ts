import { Pipe, PipeTransform } from '@angular/core';
import { ProveedorListado } from '../modelos/proveedores';

@Pipe({
  name: 'filtroproveedor',
})
export class ProveedorPipe implements PipeTransform {
  transform(
    proveedor: ProveedorListado[],
    page: number = 0,
    search: string = ''
  ): ProveedorListado[] {
    if (search.length === 0) return proveedor.slice(page, page + 5);

    const filteredProveedor = proveedor.filter((prov) =>
      prov.nombre.includes(search)
    );
    return filteredProveedor.slice(page, page + 5);
  }
}

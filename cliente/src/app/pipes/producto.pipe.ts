import { Pipe, PipeTransform } from '@angular/core';
import { ProductoRubro } from '../modelos/productos';

@Pipe({
  name: 'filtroproducto',
})
export class ProductoPipe implements PipeTransform {
  transform(
    producto: ProductoRubro[],
    page: number = 0,
    search: string = ''
  ): ProductoRubro[] {
    if (search.length === 0) return producto.slice(page, page + 5);

    const filteredProductos = producto.filter((prod) =>
      prod.nombreproducto.includes(search.toUpperCase())
    );
    return filteredProductos.slice(page, page + 5);
  }
}

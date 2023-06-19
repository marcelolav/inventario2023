import { Pipe, PipeTransform } from '@angular/core';
import { Compra, CompraExtendido } from '../modelos/compras';

@Pipe({
  name: 'filtrocompra',
})
export class CompraPipe implements PipeTransform {
  transform(
    compras: CompraExtendido[],
    page: number = 0,
    search: string = ''
  ): CompraExtendido[] {
    if (search.length === 0) return compras.slice(page, page + 5);

    const filteredCompras = compras.filter((comp) =>
      comp.nombreproducto.includes(search)
    );
    return filteredCompras.slice(page, page + 5);
  }
}

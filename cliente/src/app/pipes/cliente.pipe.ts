import { Pipe, PipeTransform } from '@angular/core';
import { ListadoCliente } from '../modelos/clientes';

@Pipe({
  name: 'filtrocliente',
})
export class ClientePipe implements PipeTransform {
  transform(
    cliente: ListadoCliente[],
    page: number = 0,
    search: string = ''
  ): ListadoCliente[] {
    if (search.length === 0) return cliente.slice(page, page + 5);
    const filteredClientes = cliente.filter((cli) =>
      cli.nombrecliente?.includes(search.toUpperCase())
    );

    return filteredClientes.slice(page, page + 5);
  }
}

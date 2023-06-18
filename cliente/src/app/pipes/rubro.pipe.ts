import { Pipe, PipeTransform } from '@angular/core';
import { RubroListado } from '../modelos/rubros';

@Pipe({
  name: 'filtrorubro',
})
export class RubroPipe implements PipeTransform {
  transform(
    rubro: RubroListado[],
    page: number = 0,
    search: string
  ): RubroListado[] {
    if (search.length === 0) return rubro.slice(page, page + 5);
    const filteredRubros = rubro.filter((rub) =>
      rub.nombrerubro?.includes(search.toUpperCase())
    );

    return filteredRubros.slice(page, page + 5);
  }
}

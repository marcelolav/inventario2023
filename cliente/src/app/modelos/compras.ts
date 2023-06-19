export interface Compra {
  idcompra?: number;
  idproveedor?: number;
  idproducto?: number;
  fechacompra?: Date;
  cantidad?: number;
  preciocompra?: number;
  preciocompradolar?: number;
  //nombreproducto: string;
}
export interface CompraExtendido extends Compra {
  nombreproducto: string;
  idcompras: number;
  nombre: string;
}

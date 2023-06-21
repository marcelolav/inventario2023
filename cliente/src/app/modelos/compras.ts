export interface Compra {
  idcompras?: number;
  idproveedores?: number;
  idproductos?: number;
  fechacompra?: Date;
  comprobante?: string;
  cantidad?: number;
  preciocompra?: number;
  preciocompradolar?: number;
  subtotal?: number;
  //nombreproducto: string;
}
export interface CompraExtendido extends Compra {
  nombreproducto: string;
  idcompras: number;
  nombre: string;
  comprobante: string;
  preciocompra: number;
  subtotal: number;
}

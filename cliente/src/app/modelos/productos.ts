export interface Producto {
  idproducto?: number;
  codigobarra?: string;
  nombreproducto?: string;
  descripcion?: string;
  precio?: number;
  preciocompra?: number;
  existencia?: number;
  preciorefdolar?: number;
  rubroid?: number;
}
export interface ProductoRubro {
  idproducto: number;
  codigobarra: string;
  nombreproducto: string;
  descripcion: string;
  precio: number;
  preciocompra: number;
  existencia: number;
  preciorefdolar: number;
  rubroid: number;
  nombrerubro: string;
}

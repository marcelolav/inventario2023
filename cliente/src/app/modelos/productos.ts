export interface Producto {
  idproductos?: number;
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
  idproductos: number;
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

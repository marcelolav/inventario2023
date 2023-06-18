export interface Proveedor {
  idproveedores?: number;
  nombre?: string;
  referencia?: string;
  fechaultimacompra?: Date;
  totalcompras?: number;
}
export interface ProveedorListado {
  idproveedores: number;
  nombre: string;
  referencia: string;
  fechaultimacompra: Date;
  totalcompras: number;
}

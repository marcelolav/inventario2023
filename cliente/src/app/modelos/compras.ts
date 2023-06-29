export interface CompraCabecera {
  idcomprascabecera?: number;
  fecha?: Date;
  comprobante_cabecera: number;
  idproveedores?: number;
  totalcompra?: number;
}
export interface CompraDetalle {
  idcomprasdetalle?: number;
  comprobante_detalle?: number;
  idproductos?: number;
  precioproducto?: number;
  cantidadproducto?: number;
  subtotalproducto?: number;
}

export interface CompraCabeceraConProveedorSimple extends CompraCabecera {
  idproveedores: number;
  nombre: string;
}

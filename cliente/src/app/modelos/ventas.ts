export interface VentaCabecera {
  idventascabecera?: number;
  comprobante_cabecera?: number;
  idclientes_cabecera?: number;
  fecha?: Date;
  totalventa?: string;
}

export interface VentasDetalle {
  idventasdetalle?: number;
  comprobante_detalle: string;
  idproductos_detalle: number;
  cantidad: number;
  importe?: number;
  subtotal?: number;
}

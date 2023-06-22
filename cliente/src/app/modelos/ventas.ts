export interface VentaCabecera {
  idventascabecera?: number;
  comprobante?: number;
  idclientes?: number;
  fecha?: Date;
  totalventa?: string;
}

export interface VentasDetalle {
  idventasdetalle?: number;
  comprobante?: string;
  idproductos?: number;
  cantidad?: number;
  importe?: number;
  subtotal?: number;
}

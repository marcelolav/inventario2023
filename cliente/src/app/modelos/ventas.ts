export interface Venta {
  idventas?: number;
  comprobante?: number;
  idcliente?: number; // registro completo
  fecha?: Date;
  producto?: string;
  cantidad?: number;
  preciounitario?: number;
  preciosubtotal?: number;
}

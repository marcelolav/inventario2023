export interface Venta {
  idventas?: number;
  comprobante?: number;
  cliente?: string;  // registro completo
  fecha?: Date;
  producto?: string;
  cantidad?: number;
  preciounitario?: number;
  preciosubtotal?: number;
}
// definir registro de cliente y funcion get
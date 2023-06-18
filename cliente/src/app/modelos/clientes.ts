export interface Cliente {
  idclientes?: number;
  nombrecliente?: string;
  telefono?: string;
  direccion?: string;
  cuit?: string;
  observaciones?: string;
}

export interface ListadoCliente {
  idclientes: number;
  nombrecliente?: string;
  telefono?: string;
  direccion?: string;
  cuit?: string;
  observaciones?: string;
}

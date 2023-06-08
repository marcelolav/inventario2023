export class Carrito {
  constructor(
    public cliente: string,
    public telefono: string, 
    public fechaingreso: Date, 
    public articulo: string,
    public falla: string,
    public observaciones: string,
    public fechasalida: Date,
    public precioreparacion: number,
    public idservicios?: number)
    {
  }
}

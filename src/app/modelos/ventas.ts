export class Ventas {
  constructor(
    public fecha: Date,
    public producto: string, 
    public cantidad: number, 
    public precio: number, 
    public id?: number)
    {}
}

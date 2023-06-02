export class Producto {
  constructor(
    public codigobarra: string,
    public nombre: string, 
    public descripcion: string, 
    public precio: number, 
    public preciocompra: number,
    public existencia: number,
    public id?: number,
    public refdolar?: number)
    {
  }
}

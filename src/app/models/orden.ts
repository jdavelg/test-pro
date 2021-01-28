export class Orden{
    constructor(
       public id:number,
       public idProducto:number,
       public idCliente:number,
       public cantidad:number,
       public fecha:string 
    ){

    }
}
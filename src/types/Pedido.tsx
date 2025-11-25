export interface PedidoEntregado {
  codigoPedido: string;
  direccion: string;
  fechaPedido: string;
  estadoPedido: string;
}

export interface PedidoProducto {
    codigo:string;
    nombre:string;
    precio:number;
}

export interface DetallePedido {
  codigo: string;
  codigoPedido: string;
  codigoProducto: string;
  cantidad: number;
  precioUnitarioVenta: number;
}
//es lo mismo que el dto
export interface DetallePedido{
    "codigo":number;
    "idCliente":number;
}


export interface DetallePedidoPost{
    "id":number;
    "idPedido":number;
    "idArticulo":number;
    "Cantidad":number;
}
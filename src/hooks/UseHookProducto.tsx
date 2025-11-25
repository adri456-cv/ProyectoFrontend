import { useFetch } from "../hooks/UseHookPedido";
import type { PedidoProducto } from "../types/Pedido";
export function ProductoEntregado(){
    const {datos, loading, errores}= useFetch<PedidoProducto>("https://almacensanc-production.up.railway.app/api/Producto");
    return(
        <>
            <ul>
                {errores && <li>{errores.message}</li>}
                {loading && <li>loading....</li>}
                {datos.map((Pedido)=>(
                    <li key={Pedido.codigo}>{Pedido.codigo} | {Pedido.nombre} | {Pedido.precio}</li>
                    
                ))}
            </ul>
        </>
    );
}

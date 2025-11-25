import { useFetch } from "../hooks/UseHookPedido";
import type { PedidoEntregado } from "../types/Pedido";
export function pagina(){
    const {datos, loading, errores}= useFetch<PedidoEntregado>("https://ventassc-production.up.railway.app/api/Pedidos/ListaDePedidos");
    return(
        <>
            <ul>
                {errores && <li>{errores.message}</li>}
                {loading && <li>loading....</li>}
                {datos.map((Pedido)=>(
                    <li key={Pedido.codigoPedido}>{Pedido.codigoPedido}{Pedido.fechaPedido}{Pedido.direccion}{Pedido.estadoPedido}</li>
                    
                ))}
            </ul>
        </>
    );
}
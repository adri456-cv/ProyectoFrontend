import type { PedidoEntregado } from "../../types/Pedido";
// src/components/Organismos/OrgListarPedidoEntregado.tsx
// ... (El código permanece casi igual, solo usa el nuevo ItemListaPedido dentro de ListaPedidoEntregado)
import { ListaPedidoEntregado } from "../Moleculas/ListaPedidoEntregado";
import { Titulo } from "../Atomos/Titulos";
interface ListarPedidoEntregados{
    titulo:string;
    subtitulo:string;
    registro: PedidoEntregado[];

}

export function OrgListarPedidoEntregado(props:ListarPedidoEntregados){
    const {titulo, subtitulo, registro}=props;
    return(
        <>  
            <div className="listado-pedidos-organismo"> 
        
            <Titulo titulo={titulo}></Titulo>
            
            <ListaPedidoEntregado subtitulo={subtitulo} registro={registro} />
            
        </div>
        </>
    );
}
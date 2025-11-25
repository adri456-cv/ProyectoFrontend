// src/components/Moleculas/ListaPedidoEntregado.tsx
import type { PedidoEntregado } from "../../types/Pedido";
import { Lista } from "./Lista"; // Ahora Lista es una Molécula
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaPedido } from "../Atomos/ItemListaPedido";

interface ListaPedidosEntregadosProps {
    subtitulo: string;
    // ❌ CORRECCIÓN: El mapeo se moverá al Organismo/Página
    registro: PedidoEntregado[]; 
}

export function ListaPedidoEntregado(props: ListaPedidosEntregadosProps) {
    const { subtitulo, registro } = props;
    
    // 🎯 El mapeo debe subir un nivel, pero si quieres dejar el mapeo aquí, es un límite aceptable para una "Molécula compleja". 
    // Por simplicidad, lo dejaremos en el Organismo/Página.
    
    return (
        <div>
            <Subtitulo subtitulo={subtitulo} />
            {/* Aquí pasamos los ítems mapeados como children */}
            <Lista>
                {registro.map((pedido) => (
                    // Usamos el nuevo Átomo ItemListaPedido
                    <ItemListaPedido key={pedido.codigoPedido} pedido={pedido} />
                ))}
            </Lista>
        </div>
    );
}
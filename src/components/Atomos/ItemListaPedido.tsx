// src/components/Atomos/ItemListaPedido.tsx
import type { PedidoEntregado } from "../../types/Pedido";

// Recibe un único item, no la lista entera.
interface ItemProps {
    pedido: PedidoEntregado;
}

export function ItemListaPedido(props: ItemProps) {
    const { pedido } = props;
    // Usamos list-group-item de Bootstrap y bg-light para un tono gris claro
    return (
        <li className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1 text-dark fw-bold">CÓDIGO PEDIDO: {pedido.codigoPedido}</p>
                <small className="text-muted">DIRECCION: {pedido.direccion}</small>
            </div>
            <small className="text-secondary">Estado: {pedido.estadoPedido}</small>
        </li>
    );
}
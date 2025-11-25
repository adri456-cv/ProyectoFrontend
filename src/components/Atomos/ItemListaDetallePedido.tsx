import type { DetallePedido } from "../../types/Pedido";

interface ItemDetalleProps {
  detalle: DetallePedido;
}

export function ItemListaDetallePedido(props: ItemDetalleProps) {
  const { detalle } = props;

  return (
    <li className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text-dark fw-bold">CÓDIGO: {detalle.codigo}</p>
        <small className="text-muted">Pedido: {detalle.codigoPedido} | Producto: {detalle.codigoProducto}</small>
      </div>
      <small className="text-secondary">Cantidad: {detalle.cantidad} | Precio Unitario: ${detalle.precioUnitarioVenta}</small>
    </li>
  );
}

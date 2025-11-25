import type { Venta } from "../../types/Venta";

interface ItemVentaProps {
  venta: Venta;
}

export function ItemListaVenta(props: ItemVentaProps) {
  const { venta } = props;
  return (
    <li className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text-dark fw-bold">VENTA: {venta.codigoVenta}</p>
        <small className="text-muted">Sucursal: {venta.codigoSucursal}</small>
      </div>
      <small className="text-secondary">Cliente: {venta.codigoCliente} | Pedido: {venta.codigoPedido}</small>
      <div className="d-flex justify-content-end mt-1">
        <small className="text-muted">Monto: ${venta.montoTotal}</small>
        <small className="text-muted ms-3">Fecha: {new Date(venta.fechaEmision).toLocaleString()}</small>
      </div>
    </li>
  );
}

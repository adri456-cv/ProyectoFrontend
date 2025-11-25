import type { Ruta } from "../../types/Ruta";

interface ItemRutaProps {
  ruta: Ruta;
}

export function ItemListaRuta(props: ItemRutaProps) {
  const { ruta } = props;

  return (
    <li className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text-dark fw-bold">RUTA: {ruta.codigoRuta}</p>
        <small className="text-muted">Pedido: {ruta.codigoPedido} | Orden: {ruta.orden}</small>
      </div>
      <small className="text-secondary">Cliente: {ruta.codigoCliente} — Fecha: {ruta.fechaCreacion}</small>
    </li>
  );
}

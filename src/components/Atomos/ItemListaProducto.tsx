import type { Producto } from "../../types/Producto";

interface ItemProductoProps {
  producto: Producto;
  onSelect?: (codigo: string) => void;
}

export function ItemListaProducto(props: ItemProductoProps) {
  const { producto, onSelect } = props;
  return (
    <li
      className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm"
      onClick={() => onSelect && onSelect(producto.codigo)}
      style={{ cursor: onSelect ? "pointer" : "default" }}
    >
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text-dark fw-bold">{producto.codigo}</p>
        <small className="text-muted">{producto.nombre}</small>
      </div>
    </li>
  );
}

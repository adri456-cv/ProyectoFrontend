import type { Empleado } from "../../types/Empleado";

interface ItemEmpleadoProps {
  empleado: Empleado;
  onSelect?: (codigo: string) => void;
}

export function ItemListaEmpleado(props: ItemEmpleadoProps) {
  const { empleado, onSelect } = props;
  return (
    <li
      className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm"
      onClick={() => onSelect && onSelect(empleado.codigo)}
      style={{ cursor: onSelect ? "pointer" : "default" }}
    >
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text-dark fw-bold">{empleado.codigo}</p>
        <small className="text-muted">{empleado.persona.nombre} {empleado.persona.apellidoPaterno}</small>
      </div>
    </li>
  );
}

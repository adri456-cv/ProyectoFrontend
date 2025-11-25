import { Topbar } from "../Moleculas/Topbar";

interface OrgTopbarProps {
  active: string;
  onChange: (id: string) => void;
}

export function OrgTopbar({ active, onChange }: OrgTopbarProps) {
  const items = [
    { id: "pedidos", label: "Pedidos" },
    { id: "clientes", label: "Clientes" },
    { id: "detalles", label: "Detalles" },
    { id: "rutas", label: "Rutas" },
    { id: "ventas", label: "Ventas" },
  ];
  return (
    <div className="container-fluid bg-white p-2 mb-3 rounded shadow-sm">
      <Topbar items={items} activeId={active} onChange={onChange} />
    </div>
  );
}

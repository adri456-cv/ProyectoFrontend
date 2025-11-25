import { Sidebar } from "../Moleculas/Sidebar";

export function OrgSidebar() {
  const items = [
    { to: "/pedidos", label: "Pedidos" },
    { to: "/clientes", label: "Clientes" },
    { to: "/detalles", label: "Detalles" },
    { to: "/rutas", label: "Rutas" },
    { to: "/ventas", label: "Ventas" },
    { to: "/productos", label: "Productos" },
  ];
  return (
    <aside className="col-12 col-md-3 col-lg-2">
      <Sidebar items={items} />
    </aside>
  );
}

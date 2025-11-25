import { NavItem } from "../Atomos/NavItem";

interface SidebarProps {
  items: { to: string; label: string }[];
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <nav className="bg-white p-3 rounded shadow-sm">
      <ul className="nav flex-column">
        {items.map((i) => (
          <NavItem key={i.to} to={i.to} label={i.label} />
        ))}
      </ul>
    </nav>
  );
}

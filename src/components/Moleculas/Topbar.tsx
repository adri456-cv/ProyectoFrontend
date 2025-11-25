import { NavItem } from "../Atomos/NavItem";

interface TopbarProps {
  items: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
}

export function Topbar({ items, activeId, onChange }: TopbarProps) {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 py-2">
      <ul className="nav justify-content-center">
        {items.map((it) => (
          <NavItem key={it.id} id={it.id} label={it.label} active={activeId === it.id} onClick={onChange} />
        ))}
      </ul>
    </div>
  );
}

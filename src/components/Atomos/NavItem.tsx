interface NavItemProps {
  id: string; // unique id used to identify section
  label: string;
  active: boolean;
  onClick?: (id: string) => void;
}

export function NavItem({ id, label, active, onClick }: NavItemProps) {
  return (
    <li className="nav-item mb-0 me-2">
      <button
        type="button"
        className={`btn btn-sm ${active ? "btn-secondary fw-bold" : "btn-outline-secondary"}`}
        onClick={() => onClick && onClick(id)}
      >
        {label}
      </button>
    </li>
  );
}

// src/components/Atomos/Boton.tsx
interface PropsBoton {
  nombre: string; 
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  // Opcional: para variar el color (success, danger, etc.)
  variant?: "primary" | "secondary" | "success" | "danger" | "warning"; 
  disabled?: boolean;
}


export function Boton(props: PropsBoton) {
  const { 
    nombre, 
    onClick, 
    type = "button", 
    variant = "secondary", // 🎯 Por defecto, usamos el gris/secondary
    disabled = false
  } = props;

  // Creamos la clase CSS dinámica de Bootstrap
  const buttonClass = `btn btn-sm btn-${variant}`; 

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      // 🎯 Aplica la clase Bootstrap
      className={buttonClass}
    >
      {nombre}
    </button>
  );
}
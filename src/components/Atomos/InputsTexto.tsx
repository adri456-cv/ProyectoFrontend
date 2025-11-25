// src/components/Atomos/Input.tsx
interface PropsInput {
  label: string; 
  value: string; 
  onChange: (valor: string) => void;
  type?: string; 
  placeholder?: string;
  // Opcional: para inputs inválidos o requeridos, aunque Bootstrap ya lo maneja
  required?: boolean; 
}

export function Input(props: PropsInput) {
  const { label, value, onChange, type = "text", placeholder, required = false } = props;

  return (
    // Usamos mb-3 (margin bottom 3) para el espaciado de Bootstrap
    <div className="mb-3">
      {/* 🎯 Aplica la clase Bootstrap para etiquetas */}
      <label htmlFor={label} className="form-label text-secondary fw-semibold">
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      
      {/* 🎯 Aplica la clase principal de Input de Bootstrap */}
      <input
        id={label} // Conecta la etiqueta con el input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        // Aplica la clase Bootstrap 'form-control'
        className="form-control"
      />
    </div>
  );
}
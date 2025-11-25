export interface Persona {
  ci: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  fechaNacimiento?: string;
  sexo?: string;
}

export interface Empleado {
  codigo: string;
  fechaIngreso?: string;
  persona: Persona;
}

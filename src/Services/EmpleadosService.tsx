import type { Empleado } from "../types/Empleado";

export async function EmpleadosServiceGET(urlBase = "https://ventassc-production.up.railway.app/api/Empleados/Empleados") {
  const response = await fetch(urlBase);
  if (!response.ok) throw new Error("Error al obtener Empleados");
  return (await response.json()) as Empleado[];
}

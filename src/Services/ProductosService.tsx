import type { Producto } from "../types/Producto";

export async function ProductosServiceGET(urlBase = "https://ventassc-production.up.railway.app/api/Producto/Productos") {
  const response = await fetch(urlBase);
  if (!response.ok) throw new Error("Error al obtener Productos");
  return (await response.json()) as Producto[];
}

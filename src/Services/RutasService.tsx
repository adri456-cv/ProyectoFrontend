import type { Ruta } from "../types/Ruta";

export async function RutasServiceGET(urlBase = "https://ventassc-production.up.railway.app/api/Rutas") {
  const response = await fetch(urlBase);

  if (!response.ok) throw new Error("Error al obtener Rutas");

  return (await response.json()) as Ruta[];
}

// Servicio POST para crear una ruta — usa query params y devuelve JSON
export async function RutasServicePOST({
  codigoRuta,
  codigoCliente,
  codigoPedido,
  orden,
}: {
  codigoRuta: string;
  codigoCliente: string;
  codigoPedido: string;
  orden: string | number;
}) {
  const base = "https://ventassc-production.up.railway.app/api/Rutas";

  const url = `${base}?codigoRuta=${encodeURIComponent(codigoRuta)}&codigoCliente=${encodeURIComponent(codigoCliente)}&codigoPedido=${encodeURIComponent(codigoPedido)}&orden=${encodeURIComponent(String(orden))}`;

  const response = await fetch(url, { method: "POST" });
  if (!response.ok) throw new Error("Error en el servidor al crear ruta");
  return response.json();
}

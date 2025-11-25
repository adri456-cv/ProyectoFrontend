import type { Venta } from "../types/Venta";

export async function VentasServiceGET(urlBase = "https://ventassc-production.up.railway.app/api/Ventas/Ventas") {
  const response = await fetch(urlBase);
  if (!response.ok) throw new Error("Error al obtener Ventas");
  return (await response.json()) as Venta[];
}

export async function VentasServicePOST({
  codigoPedido,
  codigoCliente,
  codigoSucursal,
  codigoVenta,
  monto,
}: {
  codigoPedido: string;
  codigoCliente: string;
  codigoSucursal: string;
  codigoVenta: string; // parameter 'codigo' in API
  monto: number;
}) {
  const base = "https://ventassc-production.up.railway.app/api/Ventas";
  const url = `${base}?codigoPedido=${encodeURIComponent(codigoPedido)}&codigoCliente=${encodeURIComponent(codigoCliente)}&codigoSucursal=${encodeURIComponent(codigoSucursal)}&codigo=${encodeURIComponent(codigoVenta)}&monto=${encodeURIComponent(String(monto))}`;
  const response = await fetch(url, { method: "POST" });
  if (!response.ok) throw new Error("Error en el servidor al crear venta");
  return response.json();
}

import type { DetallePedido } from "../types/Pedido";

export async function DetallePedidoServiceGET(urlBase = "https://ventassc-production.up.railway.app/api/DetallePedidos/ListaDetallesActivos") {
  const response = await fetch(urlBase);

  if (!response.ok) throw new Error("Error al obtener detalles de pedidos");

  return (await response.json()) as DetallePedido[];
}

// Servicio POST para Crear un Detalle de Pedido usando query params
export async function DetallePedidoServicePOST({
    codigo,
    codigoPedido,
    codigoProducto,
    cantidad,
    precio,
}: {
    codigo: string;
    codigoPedido: string;
    codigoProducto: string;
    cantidad: number;
    precio: number;
}) {
    const base = "https://ventassc-production.up.railway.app/api/DetallePedidos/AgregarDetalle";

    const url = `${base}?codigo=${encodeURIComponent(codigo)}&codigoPedido=${encodeURIComponent(codigoPedido)}&codigoProducto=${encodeURIComponent(codigoProducto)}&cantidad=${encodeURIComponent(String(cantidad))}&precio=${encodeURIComponent(String(precio))}`;

    const response = await fetch(url, { method: "POST" });

    if (!response.ok) throw new Error("Error en el servidor al crear detalle");

    return response.json();
}
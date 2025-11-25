export async function PedidoServicePOST({
  codigo,
  codigoCliente,
  codigoEmpleado,
  
  
}: {
  codigo: string;
  codigoCliente: string;
  codigoEmpleado: string;
  
}) {
  const base = "https://ventassc-production.up.railway.app/api/Pedidos/AgregarPedido";

  const url = `${base}?codigo=${codigo}&codigoCliente=${codigoCliente}&codigoEmpleado=${codigoEmpleado}`;

  const response = await fetch(url, {
    method: "POST",
  });

  if (!response.ok) throw new Error("Error en el servidor");

  return response.json();
}

export async function ClienteServicePOST({
  ci,
  nombre,
  apellido,
  telefono,
  contacto,
  direccion,
}: {
  ci: string;
  nombre: string;
  apellido: string;
  telefono: string;
  contacto: string;
  direccion: string;
}) {
  const base = "https://ventassc-production.up.railway.app/api/Clientes/Tarea3CrearCliente";

  const url = `${base}?ci=${encodeURIComponent(ci)}&nombre=${encodeURIComponent(nombre)}&apellido=${encodeURIComponent(apellido)}&telefono=${encodeURIComponent(telefono)}&contacto=${encodeURIComponent(contacto)}&direccion=${encodeURIComponent(direccion)}`;

  const response = await fetch(url, {
    method: "POST",
  });

  if (!response.ok) throw new Error("Error en el servidor al crear cliente");

  return response.json();
}

import { useFetch } from "../../hooks/UseHookPedido";
import type { Venta } from "../../types/Venta";
import { OrgListarVentas } from "../Organismos/OrgListarVentas";

const URL_ventas = "https://ventassc-production.up.railway.app/api/Ventas/Ventas";

export function VentasGet() {
  const { datos: ventas, loading, errores } = useFetch<Venta>(URL_ventas);
  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <p className="text-muted mt-2">Cargando Ventas... Espere</p>
      </div>
    );
  }
  if (errores) {
    return (
      <div className="alert alert-secondary text-danger text-center" role="alert">
        <p className="mb-0">Error al conectar con el servicio de Ventas.</p>
      </div>
    );
  }
  const arr = Array.isArray(ventas) ? ventas : [];
  return (
    <main className="container my-5 p-3 rounded shadow-lg bg-white">
      <OrgListarVentas titulo="Registro de Ventas" subtitulo={`Ventas Registradas: ${arr.length}`} registro={arr} />
    </main>
  );
}

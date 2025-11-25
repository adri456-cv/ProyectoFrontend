import { useFetch } from "../../hooks/UseHookPedido";
import type { DetallePedido } from "../../types/Pedido";
import { OrgListarDetallePedido } from "../Organismos/OrgListarDetallePedido";

const URL_detalles = "https://ventassc-production.up.railway.app/api/DetallePedidos/ListaDetallesActivos";

export function DetallesGet() {
  const { datos: detalles, loading, errores } = useFetch<DetallePedido>(URL_detalles);

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <p className="text-muted mt-2">Cargando Detalles... Espere</p>
      </div>
    );
  }

  if (errores) {
    return (
      <div className="alert alert-secondary text-danger text-center" role="alert">
        <p className="mb-0">Error al conectar con el servicio de Detalles.</p>
      </div>
    );
  }

  const arr = Array.isArray(detalles) ? detalles : [];

  return (
    <main className="container my-5 p-3 rounded shadow-lg bg-white">
      <OrgListarDetallePedido
        titulo="Registro de Detalles"
        subtitulo={`Detalles Activos: ${arr.length}`}
        registro={arr}
      />
    </main>
  );
}

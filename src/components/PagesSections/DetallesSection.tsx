import { useFetch } from "../../hooks/UseHookPedido";
import type { DetallePedido } from "../../types/Pedido";
import { OrgListarDetallePedido } from "../Organismos/OrgListarDetallePedido";
import { OrgDetalleForm } from "../Organismos/OrgDetalleForm";
import { Subtitulo } from "../Atomos/Subtitulo";

const URL_detalles = "https://ventassc-production.up.railway.app/api/DetallePedidos/ListaDetallesActivos";

export function DetallesSection() {
  const { datos: detalles, loading, errores } = useFetch<DetallePedido>(URL_detalles);
  const arr = Array.isArray(detalles) ? detalles : [];
  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Detalles" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <OrgListarDetallePedido titulo="Registro de Detalles" subtitulo={`Detalles: ${arr.length}`} registro={arr} />
        </div>
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgDetalleForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useFetch } from "../../hooks/UseHookPedido";
import type { Venta } from "../../types/Venta";
import { OrgListarVentas } from "../Organismos/OrgListarVentas";
import { OrgVentaForm } from "../Organismos/OrgVentaForm";
import { Subtitulo } from "../Atomos/Subtitulo";

const URL_ventas = "https://ventassc-production.up.railway.app/api/Ventas/Ventas";

export function VentasSection() {
  const { datos: ventas, loading, errores } = useFetch<Venta>(URL_ventas);
  const arr = Array.isArray(ventas) ? ventas : [];
  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Ventas" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <OrgListarVentas titulo="Registro de Ventas" subtitulo={`Ventas: ${arr.length}`} registro={arr} />
        </div>
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgVentaForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useFetch } from "../../hooks/UseHookPedido";
import type { Ruta } from "../../types/Ruta";
import { OrgListarRutas } from "../Organismos/OrgListarRutas";
import { OrgRutaForm } from "../Organismos/OrgRutaForm";
import { Subtitulo } from "../Atomos/Subtitulo";

const URL_rutas = "https://ventassc-production.up.railway.app/api/Rutas";

export function RutasSection() {
  const { datos: rutas, loading, errores } = useFetch<Ruta>(URL_rutas);
  const arr = Array.isArray(rutas) ? rutas : [];
  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Rutas" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <OrgListarRutas titulo="Registro de Rutas" subtitulo={`Rutas: ${arr.length}`} registro={arr} />
        </div>
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgRutaForm />
          </div>
        </div>
      </div>
    </div>
  );
}

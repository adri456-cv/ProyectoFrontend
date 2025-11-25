import { useFetch } from "../../hooks/UseHookPedido";
import type { Ruta } from "../../types/Ruta";
import { OrgListarRutas } from "../Organismos/OrgListarRutas";

const URL_rutas = "https://ventassc-production.up.railway.app/api/Rutas";

export function RutasGet() {
  const { datos: rutas, loading, errores } = useFetch<Ruta>(URL_rutas);

  if (loading) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-secondary" role="status"></div>
        <p className="text-muted mt-2">Cargando Rutas... Espere</p>
      </div>
    );
  }

  if (errores) {
    return (
      <div className="alert alert-secondary text-danger text-center" role="alert">
        <p className="mb-0">Error al conectar con el servicio de Rutas.</p>
      </div>
    );
  }

  const arr = Array.isArray(rutas) ? rutas : [];

  return (
    <main className="container my-5 p-3 rounded shadow-lg bg-white">
      <OrgListarRutas titulo="Registro de Rutas" subtitulo={`Rutas Registradas: ${arr.length}`} registro={arr} />
    </main>
  );
}

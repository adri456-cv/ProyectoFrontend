import type { Empleado } from "../../types/Empleado";
import { ListaEmpleadoSimple } from "../Moleculas/ListaEmpleadoSimple";
import { useFetch } from "../../hooks/UseHookPedido";

const URL_empleados = "https://ventassc-production.up.railway.app/api/Empleados/Empleados";

export function OrgListarEmpleados({ onSelect }:{ onSelect?: (codigo:string)=>void }) {
  const { datos: empleados, loading, errores } = useFetch<Empleado>(URL_empleados);

  if (loading) {
    return (
      <div className="text-center p-3">
        <div className="spinner-border text-secondary" role="status" />
      </div>
    );
  }

  if (errores) {
    return (
      <div className="alert alert-secondary text-danger text-center" role="alert">
        <p className="mb-0">Error al conectar con el servicio de Empleados.</p>
      </div>
    );
  }

  const arr = Array.isArray(empleados) ? empleados : [];
  return <ListaEmpleadoSimple subtitulo={`Empleados: ${arr.length}`} registro={arr} onSelect={onSelect} />;
}

import { useFetch } from "../../hooks/UseHookPedido";
import type { Cliente } from "../../types/Cliente";
import { OrgListarClientes } from "../Organismos/OrgListarClientes";
import { OrgClienteForm } from "../Organismos/OrgClienteForm";
import { Subtitulo } from "../Atomos/Subtitulo";

const URL_clientes = "https://ventassc-production.up.railway.app/api/Clientes/ListaDeClientesDeAlta";

export function ClientesSection() {
  const { datos: clientes, loading, errores } = useFetch<Cliente>(URL_clientes);
  const arr = Array.isArray(clientes) ? clientes : [];

  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Clientes" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <OrgListarClientes titulo="Registro de Clientes" subtitulo={`Clientes: ${arr.length}`} registro={arr} />
        </div>
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgClienteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useFetch } from "../../hooks/UseHookPedido";
import type { PedidoEntregado } from "../../types/Pedido";
import { OrgListarPedidoEntregado } from "../Organismos/OrgListarPedidoEntregado";
import { OrgPedidoFrom } from "../Organismos/OrgPedidoFrom";
import { Subtitulo } from "../Atomos/Subtitulo";

const URL_pedidos = "https://ventassc-production.up.railway.app/api/Pedidos/ListaDePedidos";

export function PedidosSection() {
  const { datos: pedidos, loading, errores } = useFetch<PedidoEntregado>(URL_pedidos);

  const arr = Array.isArray(pedidos) ? pedidos : [];

  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Pedidos" />
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <OrgListarPedidoEntregado titulo="Registro de Pedidos" subtitulo={`Pedidos: ${arr.length}`} registro={arr} />
        </div>
        <div className="col-12 col-md-6">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgPedidoFrom />
          </div>
        </div>
      </div>
    </div>
  );
}

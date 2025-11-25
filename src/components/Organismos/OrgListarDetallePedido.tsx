import type { DetallePedido } from "../../types/Pedido";
import { ListaDetallePedidos } from "../Moleculas/ListaDetallePedidos";

interface ListarDetalleProps {
  titulo?: string;
  subtitulo: string;
  registro: DetallePedido[];
}

export function OrgListarDetallePedido(props: ListarDetalleProps) {
  const { titulo, subtitulo, registro } = props;

  return (
    <div className="container my-5 p-3 rounded shadow-lg bg-white">
      {titulo && <h3 className="text-secondary">{titulo}</h3>}
      <ListaDetallePedidos subtitulo={subtitulo} registro={registro} />
    </div>
  );
}

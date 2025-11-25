import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaDetallePedido } from "../Atomos/ItemListaDetallePedido";
import type { DetallePedido } from "../../types/Pedido";

interface PropsListaDetalle {
  subtitulo: string;
  registro: DetallePedido[];
}

export function ListaDetallePedidos(props: PropsListaDetalle) {
  const { subtitulo, registro } = props;

  return (
    <div>
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((d) => (
          <ItemListaDetallePedido key={d.codigo} detalle={d} />
        ))}
      </Lista>
    </div>
  );
}

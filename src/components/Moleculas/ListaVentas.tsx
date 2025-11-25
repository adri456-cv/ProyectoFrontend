import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaVenta } from "../Atomos/ItemListaVenta";
import type { Venta } from "../../types/Venta";

interface PropsListaVentas {
  subtitulo: string;
  registro: Venta[];
}

export function ListaVentas(props: PropsListaVentas) {
  const { subtitulo, registro } = props;
  return (
    <div>
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((v) => (
          <ItemListaVenta key={v.codigoVenta} venta={v} />
        ))}
      </Lista>
    </div>
  );
}

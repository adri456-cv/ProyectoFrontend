import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaRuta } from "../Atomos/ItemListaRuta";
import type { Ruta } from "../../types/Ruta";

interface PropsListaRutas {
  subtitulo: string;
  registro: Ruta[];
}

export function ListaRutas(props: PropsListaRutas) {
  const { subtitulo, registro } = props;

  return (
    <div>
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((r) => (
          <ItemListaRuta key={r.codigoRuta} ruta={r} />
        ))}
      </Lista>
    </div>
  );
}

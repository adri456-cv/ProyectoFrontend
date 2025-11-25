import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaProducto } from "../Atomos/ItemListaProducto";
import type { Producto } from "../../types/Producto";

interface PropsListaProductoSimple {
  subtitulo: string;
  registro: Producto[];
  onSelect?: (codigo: string) => void;
}

export function ListaProductoSimple(props: PropsListaProductoSimple) {
  const { subtitulo, registro, onSelect } = props;
  return (
    <div>
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((p) => (
          <ItemListaProducto key={p.codigo} producto={p} onSelect={onSelect} />
        ))}
      </Lista>
    </div>
  );
}

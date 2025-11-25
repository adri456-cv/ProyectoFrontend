import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaEmpleado } from "../Atomos/ItemListaEmpleado";
import type { Empleado } from "../../types/Empleado";

interface PropsListaEmpleadoSimple {
  subtitulo: string;
  registro: Empleado[];
  onSelect?: (codigo: string) => void;
}

export function ListaEmpleadoSimple(props: PropsListaEmpleadoSimple) {
  const { subtitulo, registro, onSelect } = props;
  return (
    <div>
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((e) => (
          <ItemListaEmpleado key={e.codigo} empleado={e} onSelect={onSelect} />
        ))}
      </Lista>
    </div>
  );
}

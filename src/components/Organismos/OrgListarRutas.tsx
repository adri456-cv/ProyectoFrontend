import type { Ruta } from "../../types/Ruta";
import { ListaRutas } from "../Moleculas/ListaRutas";

interface ListarRutasProps {
  titulo?: string;
  subtitulo: string;
  registro: Ruta[];
}

export function OrgListarRutas(props: ListarRutasProps) {
  const { titulo, subtitulo, registro } = props;

  return (
    <div className="container my-5 p-3 rounded shadow-lg bg-white">
      {titulo && <h3 className="text-secondary">{titulo}</h3>}
      <ListaRutas subtitulo={subtitulo} registro={registro} />
    </div>
  );
}

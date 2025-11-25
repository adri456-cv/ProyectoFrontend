import type { Venta } from "../../types/Venta";
import { ListaVentas } from "../Moleculas/ListaVentas";

interface ListarVentasProps {
  titulo?: string;
  subtitulo: string;
  registro: Venta[];
}

export function OrgListarVentas(props: ListarVentasProps) {
  const { titulo, subtitulo, registro } = props;
  return (
    <div className="container my-5 p-3 rounded shadow-lg bg-white">
      {titulo && <h3 className="text-secondary">{titulo}</h3>}
      <ListaVentas subtitulo={subtitulo} registro={registro} />
    </div>
  );
}

import type { Cliente } from "../../types/Cliente";
import { Lista } from "../Moleculas/Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import { ItemListaCliente } from "../Atomos/ItemListaCliente";
import { Titulo } from "../Atomos/Titulos";

interface ListarClientesProps{
  titulo?:string;
  subtitulo:string;
  registro: Cliente[];
}

export function OrgListarClientes(props: ListarClientesProps){
  const {titulo, subtitulo, registro}=props;
  return (
    <div className="container p-0">
      {titulo && <Titulo titulo={titulo} />}
      <Subtitulo subtitulo={subtitulo} />
      <Lista>
        {registro.map((c)=> (
          <ItemListaCliente key={c.codigo} cliente={c} />
        ))}
      </Lista>
    </div>
  );
}

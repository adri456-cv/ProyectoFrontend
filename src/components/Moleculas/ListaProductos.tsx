import type { PedidoProducto } from "../../types/Pedido";
import { Lista } from "./Lista";
import { Subtitulo } from "../Atomos/Subtitulo";

interface ListaPedididosEntregadosprops{
    subtitulo:string;
    registro: PedidoProducto[];
}

export function ListaProductos(props: ListaPedididosEntregadosprops) {
    const { subtitulo, registro } = props;

    return (
        <>
            <div>
                <Subtitulo subtitulo={subtitulo}></Subtitulo>
                <Lista>
                    {registro.map((p) => (
                        <li key={p.codigo} className="list-group-item">
                            {p.codigo} | {p.nombre} | ${p.precio}
                        </li>
                    ))}
                </Lista>
            </div>
        </>
    );
}
// src/Paginas/ListaClientesPage.tsx

import { useFetch } from "../../hooks/UseHookPedido";
import { ItemListaCliente } from "../Atomos/ItemListaCliente"; 
import { Lista } from "../Moleculas/Lista";
import { Subtitulo } from "../Atomos/Subtitulo";
import type { Cliente } from "../../types/Cliente";
const URL = "https://ventassc-production.up.railway.app/api/Clientes/ListaDeClientesDeAlta"; 
export function ListaClientesPage() {
    // useFetch<T> returns datos: T[] — pass `Cliente` as the generic parameter
    const { datos: clientes, loading, errores } = useFetch<Cliente>(URL);
    
    // Indicadores de estado con estilo Bootstrap (como en Pedidos)
    if (loading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-secondary" role="status"></div>
                <p className="text-muted mt-2">Cargando Clientes... Espere</p>
            </div>
        );
    }
    
    if (errores) {
        return (
            <div className="alert alert-secondary text-danger text-center" role="alert">
                <p className="mb-0">Error al Conectar con el servicio de Clientes.</p>
            </div>
        );
    }
    
    return (
        <div className="container my-5 p-3 rounded shadow-lg bg-white">
            <Subtitulo subtitulo={`Lista de Clientes: ${clientes.length} Registros`} />
            
            <Lista> 
                {/* 🎯 Mapeo de la lista de clientes, usando el nuevo Átomo de Dominio */}
                {clientes.map((cliente) => (
                    <ItemListaCliente key={cliente.codigo} cliente={cliente} />
                ))}
            </Lista>
        </div>
    );
}
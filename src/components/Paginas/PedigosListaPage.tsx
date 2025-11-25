// src/Paginas/PedidosGet.tsx
import { useFetch } from "../../hooks/UseHookPedido"; // Deberías mover useFetch a hooks/
import type { PedidoEntregado } from "../../types/Pedido";
import { OrgListarPedidoEntregado } from "../Organismos/OrgListarPedidoEntregado";

const URL_pedidos = "https://ventassc-production.up.railway.app/api/Pedidos/ListaDePedidos"; 

export function PedidosGet() {
    // useFetch expects the item type T — datos is T[]
    const { datos: pedidos, loading, errores } = useFetch<PedidoEntregado>(URL_pedidos);

    // Bootstrap para indicadores de estado (Spinners, Alerts en tono gris/secundario)
    if (loading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="text-muted mt-2">Cargando Datos... Espere</p>
            </div>
        );
    }
    
    if (errores) {
        return (
            <div className="alert alert-secondary text-danger text-center" role="alert">
                <p className="mb-0">Error al Conectar: {errores.message}</p>
            </div>
        );
    }

    // Asegurarse de que 'pedidos' es un array antes de pasarlo.
    const pedidosArray = Array.isArray(pedidos) ? pedidos : [];
    
    return (
        <main className="container my-5 p-3 rounded shadow-lg bg-white">
            <OrgListarPedidoEntregado
                titulo="Registro de Pedidos"
                subtitulo={`Pedidos Registrados: ${pedidosArray.length}`}
                registro={pedidosArray}
            />
        </main>
    );
}
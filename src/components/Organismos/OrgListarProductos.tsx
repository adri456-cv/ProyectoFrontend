import type { Producto } from "../../types/Producto";
import { ListaProductoSimple } from "../Moleculas/ListaProductoSimple";
import { useFetch } from "../../hooks/UseHookPedido";

const URL_productos = "https://ventassc-production.up.railway.app/api/Producto/Productos";

export function OrgListarProductos({ onSelect }:{onSelect?: (codigo:string) => void}) {
  const { datos: productos, loading, errores } = useFetch<Producto>(URL_productos);

  if (loading) {
    return (
      <div className="text-center p-3">
        <div className="spinner-border text-secondary" role="status" />
      </div>
    );
  }

  if (errores) {
    return (
      <div className="alert alert-secondary text-danger text-center" role="alert">
        <p className="mb-0">Error al conectar con el servicio de Productos.</p>
      </div>
    );
  }

  const arr = Array.isArray(productos) ? productos : [];
  return <ListaProductoSimple subtitulo={`Productos: ${arr.length}`} registro={arr} onSelect={onSelect} />;
}

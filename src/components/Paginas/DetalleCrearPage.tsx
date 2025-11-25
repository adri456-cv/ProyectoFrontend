import { OrgDetalleForm } from "../Organismos/OrgDetalleForm";
import { Subtitulo } from "../Atomos/Subtitulo";
import { useState } from "react";
import type { DetallePedido } from "../../types/Pedido";
import { OrgListarProductos } from "../Organismos/OrgListarProductos";

export function CrearDetalle() {
  type DetailValues = Pick<DetallePedido, "codigoPedido" | "codigoProducto"> & {
    codigo: string;
    cantidad: string;
    precio: string;
  };

  const [values, setValues] = useState<DetailValues>({
    codigo: "",
    codigoPedido: "",
    codigoProducto: "",
    cantidad: "",
    precio: "",
  });

  return (
    <div className="container my-5">
      <Subtitulo subtitulo="Crear Detalle" />
      <div className="row g-3">
        {/* Left: Product list (to pick codigo_producto) */}
        <div className="col-12 col-md-4">
          <div className="p-3 rounded shadow-sm bg-white">
            <OrgListarProductos onSelect={(codigo) => setValues((v) => ({ ...v, codigoProducto: codigo }))} />
          </div>
        </div>

        {/* Right: Form (Crear Detalle) */}
        <div className="col-12 col-md-8">
          <div className="p-4 rounded shadow-lg bg-light">
            <OrgDetalleForm values={values} setValues={setValues} />
          </div>
        </div>
      </div>
    </div>
  );
}

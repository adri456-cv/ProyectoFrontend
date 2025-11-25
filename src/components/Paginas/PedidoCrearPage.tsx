// src/Paginas/CrearPedido.tsx

import { OrgPedidoFrom } from "../Organismos/OrgPedidoFrom";
import { Subtitulo } from "../Atomos/Subtitulo";
import { OrgListarEmpleados } from "../Organismos/OrgListarEmpleados";
import { useState } from "react";

export function CrearPedido() {
  type PedidoValues = { codigo: string; codigoCliente: string; codigoEmpleado: string };
  const [values, setValues] = useState<PedidoValues>({ codigo: "", codigoCliente: "", codigoEmpleado: "" });

  return (
    <div className="container my-5">
      <Subtitulo subtitulo="Crear Pedido" />
      <div className="row g-3">
        {/* Left: Employees */}
        <div className="col-12 col-md-4">
          <div className="p-3 rounded shadow-sm bg-white">
            <OrgListarEmpleados onSelect={(codigo) => setValues((v) => ({ ...v, codigoEmpleado: codigo }))} />
          </div>
        </div>

        {/* Right: Form */}
        <div className="col-12 col-md-8">
          <div className="col-12 col-md-8 col-lg-6 p-4 rounded shadow-lg bg-light">
            <OrgPedidoFrom values={values} setValues={setValues} />
          </div>
        </div>
      </div>
    </div>
  );
}
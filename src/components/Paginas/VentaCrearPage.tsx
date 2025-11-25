import { OrgVentaForm } from "../Organismos/OrgVentaForm";
import { Subtitulo } from "../Atomos/Subtitulo";

export function CrearVenta() {
  return (
    <div className="container my-5">
      <div className="col-12 col-md-8 col-lg-6 mx-auto p-4 rounded shadow-lg bg-light">
        <Subtitulo subtitulo="Crear Venta" />
        <OrgVentaForm />
      </div>
    </div>
  );
}

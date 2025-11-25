import { OrgListarProductos } from "../Organismos/OrgListarProductos";
import { Subtitulo } from "../Atomos/Subtitulo";

export function ProductosSection() {
  return (
    <div className="container my-4">
      <Subtitulo subtitulo="Productos" />
      <div className="row g-3">
        <div className="col-12">
          <OrgListarProductos />
        </div>
      </div>
    </div>
  );
}

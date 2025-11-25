import { OrgRutaForm } from "../Organismos/OrgRutaForm";
import { Subtitulo } from "../Atomos/Subtitulo";

export function CrearRuta() {
  return (
    <div className="container my-5">
      <div className="col-12 col-md-8 col-lg-6 mx-auto p-4 rounded shadow-lg bg-light">
        <Subtitulo subtitulo="Crear Ruta" />
        <OrgRutaForm />
      </div>
    </div>
  );
}

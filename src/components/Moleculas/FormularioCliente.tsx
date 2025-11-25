import { Boton } from "../Atomos/Boton";
import { Input } from "../Atomos/InputsTexto";
interface PropsFormularioCliente {
  values: {
    ci: string;
    nombre: string;
    apellido: string;
    telefono: string;
    contacto: string;
    direccion: string;
  };
  setValues: (values: any) => void;
  onSubmit: () => void;
}

export function FormularioCliente(props: PropsFormularioCliente) {
  const { values, setValues, onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        label="CI"
        value={values.ci}
        onChange={(v) => setValues({ ...values, ci: v })}
        placeholder="Documento de Identidad"
        required
      />

      <Input
        label="Nombre"
        value={values.nombre}
        onChange={(v) => setValues({ ...values, nombre: v })}
        placeholder="Nombre"
        required
      />

      <Input
        label="Apellido"
        value={values.apellido}
        onChange={(v) => setValues({ ...values, apellido: v })}
        placeholder="Apellido"
        required
      />

      <Input
        label="Teléfono"
        value={values.telefono}
        onChange={(v) => setValues({ ...values, telefono: v })}
        placeholder="Teléfono"
        required
      />

      <Input
        label="Contacto"
        value={values.contacto}
        onChange={(v) => setValues({ ...values, contacto: v })}
        placeholder="Contacto"
      />

      <Input
        label="Dirección"
        value={values.direccion}
        onChange={(v) => setValues({ ...values, direccion: v })}
        placeholder="Dirección"
      />

      <Boton nombre="Crear Cliente" type="submit"  />
    </form>
  );
}

import { Boton } from "../Atomos/Boton";
import { Input } from "../Atomos/InputsTexto";

interface PropsFormularioRuta {
  values: {
    codigoRuta: string;
    codigoCliente: string;
    codigoPedido: string;
    orden: string;
  };
  setValues: (values: any) => void;
  onSubmit: () => void;
}

export function FormularioRuta(props: PropsFormularioRuta) {
  const { values, setValues, onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        label="Código Ruta"
        value={values.codigoRuta}
        onChange={(v) => setValues({ ...values, codigoRuta: v })}
        placeholder="Codigo Ruta"
        required
      />

      <Input
        label="Código Cliente"
        value={values.codigoCliente}
        onChange={(v) => setValues({ ...values, codigoCliente: v })}
        placeholder="Codigo Cliente"
        required
      />

      <Input
        label="Código Pedido"
        value={values.codigoPedido}
        onChange={(v) => setValues({ ...values, codigoPedido: v })}
        placeholder="Codigo Pedido"
        required
      />

      <Input
        label="Orden"
        value={values.orden}
        type="number"
        onChange={(v) => setValues({ ...values, orden: v })}
        placeholder="Orden"
        required
      />

      <Boton nombre="Crear Ruta" type="submit"  />
    </form>
  );
}

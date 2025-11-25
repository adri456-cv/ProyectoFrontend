import { Boton } from "../Atomos/Boton";
import { Input } from "../Atomos/InputsTexto";

interface PropsFormularioPedido {
  values: {
    codigo: string;
    codigoCliente: string;
    codigoEmpleado: string;
  };
  setValues: (values: any) => void;
  onSubmit: () => void;
}

export function FormularioPedido(props: PropsFormularioPedido) {
  const { values, setValues, onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        label="Código Pedido"
        value={values.codigo}
        onChange={(v) => setValues({ ...values, codigo: v })}
        placeholder="Codigo Pedido"
      />

      <Input
        label="Codigo Cliente"
        value={values.codigoCliente}
        placeholder="Codigo Cliente"
        onChange={(v) => setValues({ ...values, codigoCliente: v })}
      />

      <Input
        label="Codigo Empleado"
        value={values.codigoEmpleado}
        placeholder="Codigo Empleado"
        onChange={(v) => setValues({ ...values, codigoEmpleado: v })}
      />
      <Boton nombre="Crear Pedido" type="submit" />
    </form>
  );
}

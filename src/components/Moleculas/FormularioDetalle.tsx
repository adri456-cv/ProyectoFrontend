import { Boton } from "../Atomos/Boton";
import { Input } from "../Atomos/InputsTexto";

interface PropsFormularioDetalle {
  values: {
    codigo: string;
    codigoPedido: string;
    codigoProducto: string;
    cantidad: string; // we'll send as number from organism
    precio: string;
  };
  setValues: (values: any) => void;
  onSubmit: () => void;
}

export function FormularioDetalle(props: PropsFormularioDetalle) {
  const { values, setValues, onSubmit } = props;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input
        label="Código"
        value={values.codigo}
        onChange={(v) => setValues({ ...values, codigo: v })}
        placeholder="Codigo Detalle"
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
        label="Código Producto"
        value={values.codigoProducto}
        onChange={(v) => setValues({ ...values, codigoProducto: v })}
        placeholder="Codigo Producto"
        required
      />

      <Input
        label="Cantidad"
        value={values.cantidad}
        type="number"
        onChange={(v) => setValues({ ...values, cantidad: v })}
        placeholder="Cantidad"
        required
      />

      <Input
        label="Precio Unitario"
        value={values.precio}
        type="number"
        onChange={(v) => setValues({ ...values, precio: v })}
        placeholder="Precio"
        required
      />

      <Boton nombre="Crear Detalle" type="submit" />
    </form>
  );
}

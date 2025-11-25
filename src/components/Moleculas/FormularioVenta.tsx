import { Boton } from "../Atomos/Boton";
import { Input } from "../Atomos/InputsTexto";

interface PropsFormularioVenta {
  values: {
    codigoPedido: string;
    codigoCliente: string;
    codigoSucursal: string;
    codigoVenta: string;
    monto: string;
  };
  setValues: (values: any) => void;
  onSubmit: () => void;
}

export function FormularioVenta(props: PropsFormularioVenta) {
  const { values, setValues, onSubmit } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Input label="Código Pedido" value={values.codigoPedido} onChange={(v) => setValues({ ...values, codigoPedido: v })} placeholder="Codigo Pedido" required />
      <Input label="Código Cliente" value={values.codigoCliente} onChange={(v) => setValues({ ...values, codigoCliente: v })} placeholder="Codigo Cliente" required />
      <Input label="Código Sucursal" value={values.codigoSucursal} onChange={(v) => setValues({ ...values, codigoSucursal: v })} placeholder="Codigo Sucursal" required />
      <Input label="Código Venta" value={values.codigoVenta} onChange={(v) => setValues({ ...values, codigoVenta: v })} placeholder="Codigo Venta" required />
      <Input label="Monto" value={values.monto} type="number" onChange={(v) => setValues({ ...values, monto: v })} placeholder="Monto" required />
      <Boton nombre="Crear Venta" type="submit"  />
    </form>
  );
}

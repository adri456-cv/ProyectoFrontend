import { useState } from "react";
import { FormularioPedido } from "../Moleculas/FormularioPedido";
import { PedidoServicePOST } from "../../Services/PedidoService";

interface OrgPedidoFromProps {
  values?: { codigo: string; codigoCliente: string; codigoEmpleado: string };
  setValues?: (v: any) => void;
}

export function OrgPedidoFrom(props?: OrgPedidoFromProps) {
  const [internalValues, setInternalValues] = useState({
    codigo: "",
    codigoCliente: "",
    codigoEmpleado: "",
  });

  const values = props?.values ?? internalValues;
  const setValues = props?.setValues ?? setInternalValues;

  async function handleSubmit() {
    try {
      const data = {
        codigo: values.codigo,
        codigoCliente: values.codigoCliente,
        codigoEmpleado: values.codigoEmpleado,
      };

      const response = await PedidoServicePOST(data);
      console.log("Pedido creado:", response);
      alert("Pedido creado con éxito");

      if (props?.setValues) {
        props.setValues({ codigo: "", codigoCliente: "", codigoEmpleado: "" });
      } else {
        setInternalValues({ codigo: "", codigoCliente: "", codigoEmpleado: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear el pedido");
    }
  }

  return (
    <FormularioPedido values={values} setValues={setValues} onSubmit={handleSubmit} />
  );
}

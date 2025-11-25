import { useState } from "react";
import { FormularioDetalle } from "../Moleculas/FormularioDetalle";
import { DetallePedidoServicePOST } from "../../Services/DetallePedido";

interface OrgDetalleFormProps {
  values?: any;
  setValues?: (v: any) => void;
}

export function OrgDetalleForm(props?: OrgDetalleFormProps) {
  const [internalValues, setInternalValues] = useState({
    codigo: "",
    codigoPedido: "",
    codigoProducto: "",
    cantidad: "",
    precio: "",
  });

  const values = props?.values ?? internalValues;
  const setValues = props?.setValues ?? setInternalValues;

  async function handleSubmit() {
    try {
      const data = {
        codigo: values.codigo,
        codigoPedido: values.codigoPedido,
        codigoProducto: values.codigoProducto,
        cantidad: Number(values.cantidad),
        precio: Number(values.precio),
      };

      const response = await DetallePedidoServicePOST(data);

      console.log("Detalle creado:", response);
      alert("Detalle creado con éxito");

      if (props?.setValues) {
        props.setValues({ codigo: "", codigoPedido: "", codigoProducto: "", cantidad: "", precio: "" });
      } else {
        setInternalValues({ codigo: "", codigoPedido: "", codigoProducto: "", cantidad: "", precio: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear el Detalle");
    }
  }

  return <FormularioDetalle values={values} setValues={setValues} onSubmit={handleSubmit} />;
}

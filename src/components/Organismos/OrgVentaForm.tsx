import { useState } from "react";
import { FormularioVenta } from "../Moleculas/FormularioVenta";
import { VentasServicePOST } from "../../Services/VentasService";

interface OrgVentaFormProps{
  values?: { codigoPedido:string; codigoCliente:string; codigoSucursal:string; codigoVenta:string; monto:string }
  setValues?: (v:any)=>void;
}

export function OrgVentaForm(props?: OrgVentaFormProps) {
  const [values, setValues] = useState({
    codigoPedido: "",
    codigoCliente: "",
    codigoSucursal: "",
    codigoVenta: "",
    monto: "",
  });

  async function handleSubmit() {
    try {
      const data = {
        codigoPedido: values.codigoPedido,
        codigoCliente: values.codigoCliente,
        codigoSucursal: values.codigoSucursal,
        codigoVenta: values.codigoVenta,
        monto: Number(values.monto),
      };
      const response = await VentasServicePOST({ ...data });
      console.log("Venta creada:", response);
      alert("Venta creada con éxito");
      if(props?.setValues){
        props.setValues({ codigoPedido: "", codigoCliente: "", codigoSucursal: "", codigoVenta: "", monto: "" });
      }else{
        setValues({ codigoPedido: "", codigoCliente: "", codigoSucursal: "", codigoVenta: "", monto: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear la venta");
    }
  }

  const currentValues = props?.values ?? values;
  const currentSetValues = props?.setValues ?? setValues;
  return <FormularioVenta values={currentValues} setValues={currentSetValues} onSubmit={handleSubmit} />;
}

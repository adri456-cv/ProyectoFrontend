import { useState } from "react";
import { FormularioRuta } from "../Moleculas/FormularioRuta";
import { RutasServicePOST } from "../../Services/RutasService";

interface OrgRutaFormProps{
  values?:{codigoRuta:string; codigoCliente:string; codigoPedido:string; orden:string}
  setValues?: (v:any)=>void;
}

export function OrgRutaForm(props?:OrgRutaFormProps) {
  const [values, setValues] = useState({
    codigoRuta: "",
    codigoCliente: "",
    codigoPedido: "",
    orden: "",
  });

  async function handleSubmit() {
    try {
      const data = {
        codigoRuta: values.codigoRuta,
        codigoCliente: values.codigoCliente,
        codigoPedido: values.codigoPedido,
        orden: values.orden,
      };

      const response = await RutasServicePOST(data);
      console.log("Ruta creada:", response);
      alert("Ruta creada con éxito");
      if(props?.setValues){
        props.setValues({ codigoRuta: "", codigoCliente: "", codigoPedido: "", orden: "" });
      }else{
        setValues({ codigoRuta: "", codigoCliente: "", codigoPedido: "", orden: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear la ruta");
    }
  }

  const currentValues = props?.values ?? values;
  const currentSetValues = props?.setValues ?? setValues;
  return <FormularioRuta values={currentValues} setValues={currentSetValues} onSubmit={handleSubmit} />;
}

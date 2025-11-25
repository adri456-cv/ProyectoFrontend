import { useState } from "react";
import { FormularioCliente } from "../Moleculas/FormularioCliente";
import { ClienteServicePOST } from "../../Services/ClienteService";

interface OrgClienteFromProps {
  values?: {
    ci: string;
    nombre: string;
    apellido: string;
    telefono: string;
    contacto: string;
    direccion: string;
  };
  setValues?: (v: any) => void;
}

export function OrgClienteForm(props?: OrgClienteFromProps) {
  const [values, setValues] = useState({
    ci: "",
    nombre: "",
    apellido: "",
    telefono: "",
    contacto: "",
    direccion: "",
  });

  async function handleSubmit() {
    try {
      const data = {
        ci: values.ci,
        nombre: values.nombre,
        apellido: values.apellido,
        telefono: values.telefono,
        contacto: values.contacto,
        direccion: values.direccion,
      };

      const response = await ClienteServicePOST(data);
      console.log("Cliente creado:", response);
      alert("Cliente creado con éxito");
      // Reset form
      if (props?.setValues) {
        props.setValues({ ci: "", nombre: "", apellido: "", telefono: "", contacto: "", direccion: "" });
      } else {
        setValues({ ci: "", nombre: "", apellido: "", telefono: "", contacto: "", direccion: "" });
      }
    } catch (error) {
      console.error(error);
      alert("Error al crear el cliente");
    }
  }

  const currentValues = props?.values ?? values;
  const currentSetValues = props?.setValues ?? setValues;
  return <FormularioCliente values={currentValues} setValues={currentSetValues} onSubmit={handleSubmit} />;
}

import { useState } from "react";

export function BotonCancelar(){
    const [Cancelar, setCancelar] = useState(false);
    return (
        <>  
            <button onClick={()=>setCancelar(!Cancelar)}>{Cancelar ? "Activo": "Cancelado"}</button>
        </>
    );
}
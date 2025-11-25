import type { Cliente } from "../types/Cliente";
import { useFetch } from "../hooks/UseHookPedido";
const Url ="https://ventassc-production.up.railway.app/api/Clientes/ListaDeClientesDeAlta";
export function pagina(){
    const {datos, loading, errores}= useFetch<Cliente>(Url);
    return(
        <>
            <ul>
                {errores && <li>{errores.message}</li>}
                {loading && <li>loading....</li>}
                {datos.map((Cliente)=>(
                    <li key={Cliente.codigo}>{Cliente.codigo}{Cliente.nombre}{Cliente.apellido}{Cliente.telefono}{Cliente.contacto}{Cliente.direccion}</li>
                    
                ))}
            </ul>
        </>
    );
}
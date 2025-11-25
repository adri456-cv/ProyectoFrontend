// src/components/Atomos/ItemListaCliente.tsx
import type { Cliente } from "../../types/Cliente";

interface ItemClienteProps {
    cliente: Cliente;
}

export function ItemListaCliente(props: ItemClienteProps) {
    const { cliente } = props;
    
    return (
        // Reutilizamos el estilo de fila gris de Bootstrap
        <li className="list-group-item list-group-item-action bg-light mb-1 border rounded shadow-sm">
            <div className="d-flex w-100 justify-content-between">
                <p className="mb-1 text-dark fw-bold">CÓDIGO: {cliente.codigo} | {cliente.nombre} {cliente.apellido}</p>
                <small className="text-muted">TELÉFONO: {cliente.telefono}</small>
            </div>
            <small className="text-secondary">CONTACTO: {cliente.contacto} | DIRECCIÓN: {cliente.direccion}</small>
        </li>
    );
}
// src/components/Moleculas/Lista.tsx
import type { ReactNode } from "react";

interface ListaProps {
    children: ReactNode; // Espera nodos hijos, que serán los <li> mapeados
}

// ❌ CORRECCIÓN: Este componente ya NO maneja datos (PedidoEntregado[])
export function Lista(props: ListaProps) {
    const { children } = props;
    // Usamos list-group de Bootstrap para la estructura
    return (
        <ul className="list-group list-group-flush">
            {children}
        </ul>
    );
}
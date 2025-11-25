import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// React-router removed: rendering sections/components directly as before
import "bootstrap/dist/css/bootstrap.min.css";
import { PedidosGet } from './components/Paginas/PedigosListaPage';
import { CrearPedido } from './components/Paginas/PedidoCrearPage';
import { ListaClientesPage } from './components/Paginas/ClienteListaPage';
import { CrearCliente } from './components/Paginas/ClienteCrearPage';
import { DetallesGet } from './components/Paginas/DetallePedidosListaPage';
import { CrearDetalle } from './components/Paginas/DetalleCrearPage';
import { RutasGet } from './components/Paginas/RutasListaPage';
import { CrearRuta } from './components/Paginas/RutaCrearPage';
import { VentasGet } from './components/Paginas/VentasListaPage';
import { CrearVenta } from './components/Paginas/VentaCrearPage';
// ProductosSection removed from top navigation
import { OrgTopbar } from './components/Organismos/OrgTopbar';
import { useState } from 'react';
//import { ConexionPedido } from './Services/PedidoEntregado';
//<ProductoEntregado></ProductoEntregado>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Render a simple top navigation and show/hide sections without router */}
    <TopbarWrapper />
  </StrictMode>,
)

function TopbarWrapper() {
  const [section, setSection] = useState<string>("pedidos");
  return (
    <>
      <OrgTopbar active={section} onChange={setSection} />
      <div>
        {section === "pedidos" && (
          <>
            <PedidosGet />
            <CrearPedido />
          </>
        )}
        {section === "clientes" && (
          <>
            <ListaClientesPage />
            <CrearCliente />
          </>
        )}
        {section === "detalles" && (
          <>
            <DetallesGet />
            <CrearDetalle />
          </>
        )}
        {section === "rutas" && (
          <>
            <RutasGet />
            <CrearRuta />
          </>
        )}
        {section === "ventas" && (
          <>
            <VentasGet />
            <CrearVenta />
          </>
        )}
        { /* Productos section removed from navigation */ }
      </div>
    </>
  );
}

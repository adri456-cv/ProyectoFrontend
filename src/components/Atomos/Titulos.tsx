
interface PropTitulo {
    titulo: string;
}

export function Titulo(props: PropTitulo) {
    const { titulo } = props;
    
    return (
        <h1 className="text-dark mb-4 border-bottom pb-2">
            {titulo}
        </h1>
    );
}
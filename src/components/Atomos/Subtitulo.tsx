
interface PropSubtitulo {
    subtitulo: string;
}

export function Subtitulo(props: PropSubtitulo) {
    const { subtitulo } = props;
    
    return (
        <h3 className="text-secondary border-bottom pb-2 mb-4">
            {subtitulo}
        </h3>
    );
}
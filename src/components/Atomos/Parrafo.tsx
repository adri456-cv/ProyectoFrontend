interface Parrafoprops{
    contenido:string;
}

export function Parrafo(props:Parrafoprops){
    const {contenido}=props;
    return(
        <>  
            <p>{contenido}</p>
        </>
    );
}
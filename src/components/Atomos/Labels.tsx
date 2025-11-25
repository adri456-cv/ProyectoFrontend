interface Labelsprops{
    texto:string;
}

export function Labels(props:Labelsprops){
    const {texto}=props;
    return(
        <>
            <label>{texto}</label>
        </>
    );
}
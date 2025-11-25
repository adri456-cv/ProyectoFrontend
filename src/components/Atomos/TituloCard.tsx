interface TituloCardprops{
    titulito:string;
}
export function TituloCard(props:TituloCardprops){
    const {titulito}=props;
    return(
        <>  
            <h3>{titulito}</h3>
        </>
    );
}
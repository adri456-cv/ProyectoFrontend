interface Selecionarprops{
    elementos:string[];
    onSelect: (item:string)=>void;
}
export function Selecionar(props:Selecionarprops){
    const {elementos, onSelect}=props;
    return(
        <>
            <ul>
                {elementos.map((item, i)=>(
                    <li key={i} onClick={()=>onSelect && onSelect(item)}
                    style={{cursor: "pointer"}}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
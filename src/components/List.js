import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2010}/>
                <Item marca="Chevrolet" ano_lancamento={2015}/>
                <Item marca="Ford" ano_lancamento={1999}></Item>
                <Item></Item>
            </ul>
        </>
    )
}

export default List
import PropTypes from 'prop-types'

// Os parâmetros são chamados de props
function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca}</li>
            <p>{ano_lancamento}</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item
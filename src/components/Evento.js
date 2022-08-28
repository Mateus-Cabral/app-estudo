import PropTypes from 'prop-types';
import Button from './evento/Button';

function Evento({numero}){

    function meuEvento(){
        console.log(`Evento ativado! ${numero}`)
    }

    function primeiroEvento(){
        console.log('Evento Ativado!!')
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return(
        <>
            <p>Clique para disparar um evento</p>
            <Button event={primeiroEvento} text='Primeiro Evento!' />
            <Button event={segundoEvento} text='Segundo Evento!' />
            <button onClick={meuEvento}>Evento com número!</button>
        </>
    )
}

Evento.propTypes = {
    numero: Number
}

Evento.defaultProps = {
    numero: 0
}

export default Evento
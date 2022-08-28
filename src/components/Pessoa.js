import styles from "./Pessoa.module.css";
import PropTypes from "prop-types";

function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <img className={styles.pessoaFoto} src="https://via.placeholder.com/150" alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}



Pessoa.defaultProps = {
        foto: "https://via.placeholder.com/150",
        nome: "Mateus",
        idade: 20,
        profissao: "Programador"
    }

export default Pessoa
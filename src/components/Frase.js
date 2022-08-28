import { useState } from 'react'
import styles from './Frase.module.css'

function Frase(){

    const [frase, setFrase] = useState('')

    return(
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Esse componente é uma frase.</h1>
            <div>
                <label>Digite uma frase!</label>
                <input className={styles.input} type="text" placeholder='Digite aqui' onChange={(e)=>setFrase(e.target.value)} />
                <p>Frase: {frase}</p>
            </div>
        </div>
    )
}

export default Frase
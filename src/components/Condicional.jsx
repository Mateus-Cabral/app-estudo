import React, { useState } from 'react';


function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }


    return (  
        <>
            <h2>Cadastre seu email</h2>
            <form action="">
                <input type="text" placeholder='Digite seu email' onChange={(e)=>setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button type='submit' onClick={limparEmail}>Enviar Email</button>
                </div>
            )}
            </form>
        </>
    );
}

export default Condicional;
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Cadastrou o usuário ${name}, com a senha ${pwd}, com sucesso!`)
        setUserName(name)
        setPwd(pwd)
    }

    const [name, setName] = useState()
    const [pwd, setPwd] = useState('')

    const [userName, setUserName] = useState('')
    const [userPwd, setUserPwd] = useState('')

    return(
        <div>
            <h1>Seu cadastro {name}</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        onChange={(e)=>setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input 
                        type="password" 
                        id="password" 
                        name='password' 
                        placeholder="Digite sua senha"
                        onChange={(e)=>setPwd(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            {/* {userEmail && (
                <h2>{userName}, seu cadastro foi realizado com sucesso!</h2>
            )} */}
        </div>

    )
}
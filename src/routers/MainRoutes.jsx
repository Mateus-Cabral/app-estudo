import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';
import SayMyName from '../components/SayMyName';
import Pessoa from '../components/Pessoa';
import Frase from '../components/Frase';
import List from '../components/List';
import Evento from '../components/Evento';
import Form from '../components/Form';
import Condicional from '../components/Condicional';

function MainRoutes() {
    return ( 
        <>
            <Routes>
                <Route path='/' element={<HelloWorld />}></Route>
                <Route path='/Form' element={<Form />}></Route>
                <Route path='/Frases' element={<Frase />}></Route>
                <Route path='/Carros' element={<List />}></Route>
                <Route path='/Curriculo' element={<Pessoa />}></Route>
                <Route path='/SayMyName' element={<SayMyName nome="Mateus" />}></Route>
                <Route path='/EventoConsole' element={<Evento />}></Route>
                <Route path='/Condicional' element={<Condicional />}></Route>
            </Routes>
        </>
     );
}

export default MainRoutes
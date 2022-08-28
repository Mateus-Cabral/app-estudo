import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

function Menu() {
    return (  
       <>
        <header>
            <nav>
                <ul>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/'>Home</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/Form'>Login</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/Frases'>Frases</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/Carros'>Carros</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/SayMyName'>Say My Name</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/Curriculo'>Currículo</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/EventoConsole'>Eventos no console</Link></li>
                    <li className={styles.navItems}><Link className={styles.navLink} to='/Condicional'>Condicional</Link></li>
                </ul>
            </nav>
            <img src="..../public/logo192.png" alt="teste" />
        </header>
       </> 

    )
}

export default Menu;
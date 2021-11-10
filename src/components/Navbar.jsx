import React from 'react'
import '../style/Navbar.css'

    // Menu hamburguesa
    // Metodo por el cual quitamos o penemos una clase al botón hamburguesa, con el fin de animar el botón
    const cambiarClase = () => {
        let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
        let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');
    }

export const Navbar = () => {
    return(
        // Por medio de las clases y los @media detectamos el ancho de pantalla y definimos el responsive
        <div className="contedor-nav-bar">
            <div id="animacion" className="animacion"></div>
            <header>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <a href="/" className="scroll">
                            <li className="list-item-nav">Super Hero</li>
                        </a>
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={(e) => cambiarClase(e)}>
                    <div className="hamburger"></div>
                </div>
            </header>

        </div>
    )
}

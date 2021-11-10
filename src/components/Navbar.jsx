import React from 'react'
import '../style/Navbar.css'

    // Menu hamburguesa
    const cambiarClase = () => {
        let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
        let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');
    }

export const Navbar = () => {
    return(
        <div className="contedor-nav-bar">
            <div id="animacion" className="animacion"></div>
            <header>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <a href="/" className="scroll">
                            <li className="list-item-nav titulos-principales">Super Hero</li>
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

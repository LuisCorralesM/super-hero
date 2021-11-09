import React, { useState, useEffect } from 'react'
import '../style/Cards.css'
import axios from 'axios';


export const Cards = () => {
    const API = 'https://superheroapi.com'
    const CLAVE_API = '4619606654769918'
    const BUSQUEDA = 'Batman'

    const PETICION_GET = async (getHero) => {
        try {
            let
                res = await axios.get(getHero),
                data = await res.data;

            console.log(data);
        } catch (error) {
            console.log('ups  ' + error);
        }
    }

    useEffect(() => {
        const getHero = `${API}/api/${CLAVE_API}/search/${BUSQUEDA}`;
        PETICION_GET(getHero);
    }, [])

    const proyectos = [];

    return (
        < >
            <div className="content-proyect" id="proyectos">
                <h1 className="titulos-principales z-index">Proyectos</h1>
                <div className="grid-cards">
                    {
                        (proyectos.length) ? (
                            proyectos.map((pro, i) => (
                                <div key={i} className="contenedor-proyectos cards-con-sombras z-index">
                                    <h2 className="nombre-proyecto">{pro.nombre}</h2>
                                    <a href={pro.enlace} className="contenr-proyecto1" target="_blank" rel="noopener noreferrer">
                                        <div >
                                            <img className="freedCodeCamp__proyectos-imagen" src={pro.imagen} alt="" />
                                        </div>
                                        <div className="descripcion-proyecto">
                                            <h1 className="titulo-proyecto1">{pro.encabezado}</h1>
                                            <p className="descripcion-proyecto1">{pro.descripcion}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        ) :
                            (<h1>aun no hay naa</h1>)
                    }

                </div>
            </div>

        </>
    )
}

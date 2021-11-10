import React from 'react'
import { useSelector } from 'react-redux'
// estilos
import '../style/Cards.css'

export const Cards = () => {
    const { heroes } = useSelector(store => store.guardar)

    // console.log(heroes);
    return (
        < >
            <div className="grid-cards">
                {
                    (heroes) ? (
                        heroes.map((heroe, i) => (
                            <div key={i} className="card-heroe">
                                <h2 className="nombre-heroe">{heroe.name}</h2>
                                <img src={heroe.image.url} alt={heroe.name} className="imagen-heroe" />
                                <p>Inteligencia {heroe.powerstats.intelligence}</p>
                            </div>
                        ))
                    ) :
                        (<></>)
                }
            </div>

        </>
    )
}

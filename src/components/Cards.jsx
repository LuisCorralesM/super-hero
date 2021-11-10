import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { guardarAsincrono } from '../actions/guardarHeroe';
import { useDispatch } from 'react-redux'
// estilos
import '../style/Cards.css'

export const Cards = () => {
    const [dataOrdenada, setDataOrdenada] = useState([]);
    const [desordenado, setDesordenado] = useState(true)
    let { heroes } = useSelector(store => store.guardar);

    console.log(heroes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(guardarAsincrono('batman   '))
    }, [])

    const handleBuscar = (heroe) => {
        if (heroe.length) {
            dispatch(guardarAsincrono(heroe))
        } else {
            dispatch(guardarAsincrono('batman   '))
        }
    }

    let
        one = [],
        two = [],
        three = [],
        all = []

    function ordenar(numbers) {

        const numbersInt = []
        if (numbers.length) {
            numbers.forEach(num => {
                if ((Math.sign(num) === 1) || (Math.sign(num) === 0)) {
                    numbersInt.push(num)
                }
            });


            numbersInt.forEach((num) => {
                if (num < 10) {
                    one.push(num)
                } else if (num > 9 && num < 100) {
                    two.push(num)
                } else if (num > 99 && num < 1000) {
                    three.push(num)
                }
            })

            if (one.length) {
                let ordenado = one.sort()
                ordenado.forEach(num => {
                    all.push(num)
                })
            }
            if (two.length) {
                let ordenado = two.sort()
                ordenado.forEach(num => {
                    all.push(num)
                })
            }
            if (three.length) {
                let ordenado = three.sort()
                ordenado.forEach(num => {
                    all.push(num)
                })
            }
        }
    }

    const handleHabilidad = (habilidad) => {
        console.log(habilidad);
        let infoOrdenada = []

        if (habilidad === 'intelligence') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.intelligence)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.intelligence === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
        if (habilidad === 'strength') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.strength)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.strength === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
        if (habilidad === 'speed') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.speed)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.speed === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
        if (habilidad === 'durability') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.durability)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.durability === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
        if (habilidad === 'power') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.power)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.power === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
        if (habilidad === 'combat') {
            for (let i = 0; i < heroes.length; i++) {
                infoOrdenada.push(heroes[i].powerstats.combat)
            }
            ordenar(infoOrdenada)

            let info = [];
            for (let i = 0; i < all.length; i++) {
                info.push(heroes.find(elem => elem.powerstats.combat === all[i]))
            }
            setDataOrdenada(info)
            setDesordenado(false)
        }
    }

    // console.log(dataOrdenada);

    return (
        < >
            <div className="filtros">
                <h1 className="filtro-titulo">Busca un Heroe</h1>
                <div className="filtro-buscar">
                    <input
                        type="search"
                        className="input-buscar"
                        placeholder="Heroe"
                        onChange={e => handleBuscar(e.target.value)}
                    />
                </div>
                <div className="filtro-ordenar">
                    <select className="lista-de-opciones"
                        name="powerstats"
                        id="powerstats"
                        onChange={e => handleHabilidad(e.target.value)}
                    >
                        <option value="">Ordernar por 'powerstats'</option>
                        <option value="intelligence">intelligence</option>
                        <option value="strength">strength</option>
                        <option value="speed">speed</option>
                        <option value="durability">durability</option>
                        <option value="power">power</option>
                        <option value="combat">combat</option>
                    </select>
                </div>
            </div>
            <div className="grid-cards">
                {
                    (heroes && desordenado) ? (
                        heroes.map((heroe, i) => (
                            <div key={i} className="card-heroe">
                                <h2 className="nombre-heroe">{heroe.name}</h2>
                                <img src={heroe.image.url} alt={heroe.name} className="imagen-heroe" />
                                {/* Habilidades */}
                                <h3 className="titulo-habilidades">Powerstats</h3>
                                <p>Inteligencia: <span className="resaltar-color">{heroe.powerstats.intelligence}</span></p>
                                <p>Strengt: <span className="resaltar-color">{heroe.powerstats.strength}</span></p>
                                <p>Speed: <span className="resaltar-color">{heroe.powerstats.speed}</span></p>
                                <p>Durability: <span className="resaltar-color">{heroe.powerstats.durability}</span></p>
                                <p>Power: <span className="resaltar-color">{heroe.powerstats.power}</span></p>
                                <p>Combat: <span className="resaltar-color">{heroe.powerstats.combat}</span></p>
                                {/* Apariencia */}
                                <h3 className="titulo-apariencia">Appearance</h3>
                                <p> Gender: <span className="resaltar-color">{heroe.appearance.gender}</span></p>
                                <p> Race: <span className="resaltar-color">{heroe.appearance.race}</span></p>
                                <p> Height: <span className="resaltar-color">{heroe.appearance.height}</span></p>
                                <p> Weight: <span className="resaltar-color">{heroe.appearance.weight}</span></p>
                                <p> Eye Color: <span className="resaltar-color">{heroe.appearance.eyeColor}</span></p>
                                <p> Hair Color: <span className="resaltar-color">{heroe.appearance.hairColor}</span></p>
                            </div>
                        ))
                    ) :
                        (<></>)
                }

                {

                    (dataOrdenada) ? (
                        dataOrdenada.map((heroe, i) => (
                            <div key={i} className="card-heroe">
                                <h1>Ordenados</h1>
                                <h2 className="nombre-heroe">{heroe.name}</h2>
                                <img src={heroe.image.url} alt={heroe.name} className="imagen-heroe" />
                                {/* Habilidades */}
                                <h3 className="titulo-habilidades">Powerstats</h3>
                                <p>Inteligencia: <span className="resaltar-color">{heroe.powerstats.intelligence}</span></p>
                                <p>Strengt: <span className="resaltar-color">{heroe.powerstats.strength}</span></p>
                                <p>Speed: <span className="resaltar-color">{heroe.powerstats.speed}</span></p>
                                <p>Durability: <span className="resaltar-color">{heroe.powerstats.durability}</span></p>
                                <p>Power: <span className="resaltar-color">{heroe.powerstats.power}</span></p>
                                <p>Combat: <span className="resaltar-color">{heroe.powerstats.combat}</span></p>
                                {/* Apariencia */}
                                <h3 className="titulo-apariencia">Appearance</h3>
                                <p> Gender: <span className="resaltar-color">{heroe.appearance.gender}</span></p>
                                <p> Race: <span className="resaltar-color">{heroe.appearance.race}</span></p>
                                <p> Height: <span className="resaltar-color">{heroe.appearance.height}</span></p>
                                <p> Weight: <span className="resaltar-color">{heroe.appearance.weight}</span></p>
                                <p> Eye Color: <span className="resaltar-color">{heroe.appearance.eyeColor}</span></p>
                                <p> Hair Color: <span className="resaltar-color">{heroe.appearance.hairColor}</span></p>
                            </div>
                        ))
                    ) :
                        (<></>)
                }

            </div>

        </>
    )
}

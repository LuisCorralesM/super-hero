import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { guardarAsincrono } from '../actions/guardarHeroe';
import { useDispatch } from 'react-redux'

/* 
    En este componente se renderizan las cards que  contienen a cada uno de los super hereos consumidos
    a través de la API SuperHero
*/

// estilos
import '../style/Cards.css'

export const Cards = () => {
    // Se crean dos estados para controlar la info que vamos a renderizar por las cards, uno es para la info en el orden que llega
    // de la API 'SuperHero' y otro cuando ordenamos la info deacuerdo a la categoría que el usuario seleccionó
    const [dataOrdenada, setDataOrdenada] = useState([]);
    const [desordenado, setDesordenado] = useState(true)

    // Por medio de useSelector, (hook de redux) consumimos la información que hay en el 'store', y la desestructuramos => 'ECMAScript6'
    let { heroes } = useSelector(store => store.guardar);

    // console.log(heroes);
    //Se guarda en una constante el metodo 'useDispatch()' que nos ofrece 'react-redux' para actualizar el 'store'
    const dispatch = useDispatch();

    // En la etapa de 'montado' del componente, hacemos un 'dispatch' con un parametro de busqueda por defecto => 'batman' con el fin 
    // de ofrecer una primera vista de lo que es la app
    useEffect(() => {
        //El metodo que lleva el 'dispatch' no es más que un 'action' el cual hace la petición 'asincrónica' y tras 
        // traer los datos, hace otro 'dispatch sincrónico' para actualizar el 'store' con dicha info
        dispatch(guardarAsincrono('batman'))
    }, [])

    const handleBuscar = (heroe) => {
            // handleBuscar => detecta el evento 'onChange' de nuestro input 'Buscar' capturando el valor del mismo y
            // ejecutando una petición a la API 'SupeHero'
        if (heroe.length) {
            dispatch(guardarAsincrono(heroe))
        } else {
            // En caso de que el usuario borre el texto del input, se resetea el store al valor por defecto
            dispatch(guardarAsincrono('batman'))
        }
    }

    // Aquí reciclé una lógica que ya había hecho para ordenar arrays; ya que el metodo sort tiene sus falencias
    // es necesario distribuir los valores segun los digitos del mismo: ejm => de un digito [0,7,5] / de dos digitos [10,45,99] / etc.
    let
        one = [],
        two = [],
        three = [],
        all = []

    function ordenar(numbers) {

        const numbersInt = []
        // Primero se valida que el array no venga vacio
        if (numbers.length) {
            numbers.forEach(num => {
                // El metodo Math.sign() retorna 1 || 0  => si es positivo
                if ((Math.sign(num) === 1) || (Math.sign(num) === 0)) {
                    // Se guarda en el arreglo 'numbersInt' los valores positivos
                    numbersInt.push(num)
                }
            });


            numbersInt.forEach((num) => {
                // Recorremos el array y los clasificamos segun los digitos del número
                if (num < 10) {
                    //un digito
                    one.push(num)
                } else if (num > 9 && num < 100) {
                    // dos digitos
                    two.push(num)
                } else if (num > 99 && num < 1000) {
                    // tres digitos
                    three.push(num)
                }
            })
        
            // Se recorre cada uno de los arrays nuevos y se ordenan sus valores con el metodo sort()
            // y ya estando ordenados los volvemos a agrupar en un mismo array
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
        // Con este metodo capturamos la 'option' seleccionada por el usuario, y posteriormente ordenamos los valores de acuerdo con la 
        // habilidad seleccionada

        console.log(habilidad);
        let infoOrdenada = []

        // Para cada uno de los 'if' se recorre el array con toda la data, se filtra por la habilidad seleccionada
        if (habilidad === 'intelligence') {
            for (let i = 0; i < heroes.length; i++) {
                //  Se guardan los valores en un nuevo array llamado 'infoOrdenada'
                infoOrdenada.push(heroes[i].powerstats.intelligence)
            }
            // Luego usamos el metodo 'ordenar()' declarado en la línea => 54
            ordenar(infoOrdenada)

            let info = [];
            // Recorremos el array con la info ordenada 'all' que nos devuelve el metodo 'ordenar()'
            for (let i = 0; i < all.length; i++) {
                // filtramos del array desordenado 'heroes' la info en el orden ordenado 'all' y lo guardamos en un nuevo array 'info'
                info.push(heroes.find(elem => elem.powerstats.intelligence === all[i]))
            }

            // Finalmente actualizamos los estados para el renderizado condicional que tenemos dentro del metodo 'return()' del componente
            setDataOrdenada(info)
            setDesordenado(false)
        }

        // Se hace lo mismo para cada 'habilidad' seleccionada
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
                    //Aqui se hace una validación para el renderizado condicional, esta es valida solo cuando no se ha seleccionada 
                    // ninguna 'habilidad' en el filtro de ordenamiento
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

                    // Validación valida cuando se ha elegido una 'habilidad' por la cual ordenar
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

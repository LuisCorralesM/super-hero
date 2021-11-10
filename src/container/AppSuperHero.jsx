import React from "react";
import { Navbar } from "../components/Navbar";
import { Cards } from "../components/Cards";

// Este componente es el que se encarga de agrupar a los demas componentes de la app
// en caso de requerirlo aqui se pueden usar react-router-dom y hacer una SPA
export const AppSuperHero = () => {
    return (
        <>
            <Navbar />
            <Cards />
        </>
    )
}


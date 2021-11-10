import React,{useEffect} from "react";
import { Navbar } from "../components/Navbar";
import { Cards } from "../components/Cards";
import { guardarAsincrono } from '../actions/guardarHeroe';
import { useDispatch } from 'react-redux'


export const AppSuperHero = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(guardarAsincrono())
    }, [])
    return (
        <>
            <Navbar />
            <Cards />
        </>
    )
}


import { useState,useEffect } from "react";
import axios from "axios";

import Pokemon from "./Pokemon";
import styles from '../styles/PokeForm.module.css';

function PokeForm (){
    const [pokemon,setPokemon] = useState('');
    const [pokeInfo, setPokeInfo] = useState();
    const [apiRes, setApiRes] = useState('')

    // ---  PokeAPI meet ---
    const getPokemon = async () =>{
        let response;
        try{
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        } catch {
           setApiRes('pokemon no encontrado');
        }
        
        if(response){ 
            setApiRes('CAPTURADO !');
            return response.data;
        }else return null;
    }

    // ---  Set render info on Submit ---
    const getSubmit = async (event) =>{
        event.preventDefault();
        const responseInfo = await getPokemon();

        if(responseInfo) setPokeInfo(responseInfo)
        else {
            setApiRes('ha escapado ...');
            setPokeInfo();
        }
    }

    // ---  Set pokemon estatus on input change ---
    useEffect(()=>{
        if(pokemon) getPokemon();
        else setApiRes('');
    },[pokemon])

    return (
        <>
        {pokeInfo && Pokemon(pokeInfo)}
        {apiRes}
        <form onSubmit={getSubmit} className={styles.PokeForm}>
            <label htmlFor="pokemon">Nombre del pokemon </label>
            <input
                type="text"
                id="pokemon"
                name="pokemon"
                value={pokemon}
                onChange={(elem) => setPokemon(elem.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
        </>
    )
} 

export default PokeForm;
import React from "react";
import {useState} from 'react'





export default function ComboBox() {

const[tipoSorteio , setTipoSorteio]=useState("Mega-sena");


return(
    <div className="DivSorteio">
        <select
            name="tipoSorteio"
            value={tipoSorteio}
            className="tipoSorteio"
            defaultValue={tipoSorteio}
            onChange={(e) => setTipoSorteio(e.currentTarget.value)}
        >
            <option value='0' >Escolha:</option>
            <option value='Mega-sena' >Mega-sena</option>
            <option value='Quina' >Quina</option>
            <option value='Lotomania' >Lotomania</option>
            <option value='Timemania' >Timemania</option>
            <option value='Dia de sorte' >Dia de sorte</option>
        </select>
    </div>
)
}
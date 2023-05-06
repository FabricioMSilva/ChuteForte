import React, { useState } from "react";
import './style.css';
import Img from './imagens/Sidebar.svg';

export default function Home() {

const [bola1 , setbola1] = useState(4);

const res = bola1.sort(()=> Math.random() - 0.5);
//const res = bola1
function numeros(n){
    return (
        Array.from({length: n}, (_, i) => i + 1)
    );
}
   return (
        <div className="geral">
                <div className='Img-bar'>
                    <img className='Img' src={Img} alt="" />
                  </div>    
                     <div className="bola1">{res[5]}</div>
                     <div className="bola1">{res[4]}</div>
                     <div className="bola1">{res[6]}</div>
                     <div className="bola1">{res[7]}</div>
                     <div className="bola1">{res[8]}</div>
                     <div className="bola1">{res[9]}</div>
                     <div className="Sorteio"><button onClick={()=>setbola1(numeros(60))}>sortear</button></div>
        </div>
    );

}
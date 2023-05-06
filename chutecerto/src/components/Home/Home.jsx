import React, { useState } from "react";
import './style.css';
import Img from './imagens/Sidebar.svg';
import Logo from './imagens/Logo.svg';

export default function Home() {

    const [bola1, setbola1] = useState();
    const [numeroBolas, setnumeroBolas] = useState(6);
    const[tipoSorteio , setTipoSorteio]=useState("Mega-sena");

    //const res = bola1
    const numeros = (n) => {
        const numerosLot = Array.from({ length: n }, (_, i) => i + 1)
        return numerosLot.sort(() => Math.random() - 0.5)
    }
    return (

        //Mega-sena, Quina, Lotofácil, Lotomania, Timemania e Dia de sorte

        <div className="geral">
            <div className='div1'>
                <img className='Img' src={Img} alt="" />
                
                    <div className="DivSorteio">
                        <select className="tipoSorteio" name="jogos" id="Jogos" >
                            <option  selected>Escolha:</option>
                            <option value={1} onClick={()=>setTipoSorteio('Mega-sena')}>Mega-sena</option>
                            <option value={2}  onClick={()=>setTipoSorteio('Quina')}>Quina</option>
                            <option value={3}  onClick={()=>setTipoSorteio('Lotomania')}>Lotomania</option>
                            <option value={4}  onClick={()=>setTipoSorteio('Timemania')}>Timemania</option>
                            <option value={5}  onClick={()=>setTipoSorteio('Sorte')}>Dia de sorte</option>
                        </select>
                    </div>
                    
                
                <div className="divLogo"><img src={Logo} alt="" /><p className="titleLogo">{tipoSorteio}</p></div>
            </div>

            <div className="div2">
                
                <div className="divSorteio">
                    {bola1?.map((item, index) => {
                        if (index < numeroBolas) {
                            return (
                            <div key={index} className="bola1">{item}</div>
                            )
                        }
                    })}
                </div>

                <div className="divBtn" >


                    <div className="container">
                        <div className="center">
                            <button className="btn" onClick={() => setbola1(numeros(60))}>
                                <span ><p className="txt">Sortear</p></span>
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
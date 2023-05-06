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
                        <select className="tipoSorteio">
                    
                            <option onClick={()=>setTipoSorteio('Mega-sena')}>Mega-sena</option>
                            <option onClick={()=>setTipoSorteio('Quina')}>Quina</option>
                            <option onClick={()=>setTipoSorteio('Lotomania')}>Lotomania</option>
                            <option onClick={()=>setTipoSorteio('Timemania')}>Timemania</option>
                            <option onClick={()=>setTipoSorteio('Sorte')}>Dia de sorte</option>
                        </select>
                    </div>
                
                <div className="divLogo"><img src={Logo} alt="" /><p className="titleLogo">{tipoSorteio}</p></div>
            </div>

            <div className="div2">
                <div className="divQtdBolas"><p className="txtQtdBolas">Quantidade de Bolas:</p>
                    <select className="qtdBolas">
                        <option>Escolha:</option>
                        <option onClick={() => setnumeroBolas(6)}>6 Bolas</option>
                        <option onClick={() => setnumeroBolas(7)}>7 Bolas</option>
                        <option onClick={() => setnumeroBolas(8)}>8 Bolas</option>
                        <option onClick={() => setnumeroBolas(9)}>9 Bolas</option>
                        <option onClick={() => setnumeroBolas(10)}>10 Bolas</option>
                    </select>
                </div>
                <div className="divSorteio">
                    {bola1?.map((item, index) => {()=>{
                        if (index < numeroBolas) {
                            return (<div key={index} className="bola1">{item}</div>)
                        }}
                    })}
                </div>

                <div className="divBtn" >


                    <div class="container">
                        <div class="center">
                            <button className="btn" onClick={() => setbola1(numeros(60))}>
                                <span ><p className="txt">Sortear</p></span>
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}
import React, { useState } from "react";
import './style.css';


import Logo from './imagens/Logo.svg';

export default function Home() {

    const [SelectJogo, setSelectJogo] = useState('');

    const [sorteio, setsorteio] = useState();

    const [jogoAtual, setjogoAtual] = useState(
        {
            id: '',
            nome: '',
            numeroBolas: 6,
            cor: '',
            nSorteio: '',
            dataSorteio: '',
            mensaggem: ''
        }
    );


    const Listajogos = {
        Mega_sena: {
            id: 1,
            nome: 'Mega-sena',
            numeroBolas: 6,
            cor: "#6BEFA3",
            nSorteio: "",
            dataSorteio: '19/08/2023',
            mensaggem: 'Este simulador é somente para teste de codigo'
        },

        Quina: {
            id: 2,
            nome: 'Quina',
            numeroBolas: 5,
            cor: "#8666EF",
            nSorteio: "",
            dataSorteio: '22/08/2023',
            mensaggem: 'Este simulador é somente para teste de codigo'
        },

        Lotomania: {
            id: 3,
            nome: 'Lotomania',
            numeroBolas: 15,
            cor: "#DD7AC6",
            nSorteio: "",
            dataSorteio: '19/08/2023',
            mensaggem: 'Este simulador é somente para teste de codigo'
        },
        Timemania: {
            id: 4,
            nome: 'Timemania',
            numeroBolas: 6,
            cor: "#FFAB64",
            nSorteio: "",
            dataSorteio: '19/08/2023',
            mensaggem: 'Este simulador é somente para teste de codigo'
        },
        Dia_de_Sorte: {
            id: 5,
            nome: 'Dia_de_Sorte',
            numeroBolas: 50,
            cor: "#BFAF83",
            nSorteio: "",
            dataSorteio: '19/08/2023',
            mensaggem: 'Este simulador é somente para teste de codigo'
        }
    };



    //gera um array de bolas e embaralha as mesmas
    const numeros = (n) => {
        const numerosLot = Array.from({ length: n }, (_, i) => i + 1)
        return numerosLot.sort(() => Math.random() - 0.5)
    };

    return (
        //body corpo da pagina

        <div className="DivAvo">
            <div className='DivPai'>
                <div className="DivImgFundo">
                    <svg
                        width="613"
                        height="100%"
                        viewBox="0 0 613 1080"

                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ImgFundo">
                        <path
                            d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z"
                            fill={jogoAtual.cor}
                        />
                    </svg>

                </div>

                <div className="DivComboBox">


                    <div className="InputSelecao">
                        <select
                            name="jogo"
                            id='jogo'
                            value={SelectJogo}
                            className="Selecao"
                            defaultValue={SelectJogo}
                            onChange={(e) => {
                                const jogo = e.currentTarget.value
                                setSelectJogo(jogo)
                                setjogoAtual(Listajogos[jogo])
                                numeros(jogoAtual.numeroBolas)
                                setsorteio(numeros(60))
                            }}
                        >

                            <option value='Mega_sena' >Mega-sena</option>
                            <option value='Quina' >Quina</option>
                            <option value='Lotomania' >Lotomania</option>
                            <option value='Timemania' >Timemania</option>
                            <option value='Dia_de_Sorte' >Dia de Sorte</option>
                        </select>
                    </div>



                </div>

                <div className="DivLogo"><img src={Logo} alt="" /><p className="TituloLogo">{jogoAtual.nome}</p>
                </div>
            </div>

            <div className="Sorteio">

                <div className="SorteioBolas">
                    {sorteio?.map((item, index) => {
                        if (index < jogoAtual.numeroBolas) {
                            return (
                                <div key={index} className="Bola">{item}</div>
                            )
                        }
                        return null
                    })}
                </div>


            </div>


        </div>
    );

}
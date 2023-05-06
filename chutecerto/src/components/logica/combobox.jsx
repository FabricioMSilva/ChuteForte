




export default ComboBox = () =>{
    <div className='div1'>
    <img className='Img' src={Img} alt="" />
    
        <div className="DivSorteio">
            <select  className="tipoSorteio" size name="jogos" id="Jogos" >
                <option >Escolha:</option>
                <option  onClick={()=>setTipoSorteio('Mega-sena')}>Mega-sena</option>
                <option   onClick={()=>setTipoSorteio('Quina')}>Quina</option>
                <option   onClick={()=>setTipoSorteio('Lotomania')}>Lotomania</option>
                <option  onClick={()=>setTipoSorteio('Timemania')}>Timemania</option>
                <option onClick={()=>setTipoSorteio('Sorte')}>Dia de sorte</option>
            </select>
        </div>
        
    
   
</div>

}
import './App.css';
import React, { useState } from 'react';
// import { Link } from "react-router-dom";


const Recados = () => {
  const [recados, setRecados] = useState([]);
  const [novoRecado, setNovoRecado] = useState('');

  const handleNovoRecadoChange = (event) => {
    setNovoRecado(event.target.value);
  };

  const handleNovoRecadoSubmit = (event) => {
    event.preventDefault();
    setRecados([...recados, novoRecado]);
    setNovoRecado('');
  };

  const handleRecadoEdit = (index) => {
    const novoTexto = prompt('Digite o novo texto do recado:');
    if (novoTexto) {
      const recadosAtualizados = [...recados];
      recadosAtualizados[index] = novoTexto;
      setRecados(recadosAtualizados);
    }
  };

  const handleRecadoDelete = (index) => {
    const recadosAtualizados = recados.filter((_, i) => i !== index);
    setRecados(recadosAtualizados);
  };

  return (
    <div className='div'>
      
      <h1>Lista de Recados</h1>
      <br></br>
        <p>Adicione seus recados!</p>
        <br></br>
        
      <form onSubmit={handleNovoRecadoSubmit}>
        <input
          type="text"
          value={novoRecado}
          onChange={handleNovoRecadoChange}
          placeholder="Digite um novo recado"
        />
        <button className='buttonAdd' type="submit">Criar</button>
      </form>

      <div className='teste'>
        {recados.map((recado, index) => (
          <div  key={index}>
            {recado}

            <button className='buttonOne' onClick={() => handleRecadoEdit(index)}>Editar</button>
            <button className='buttonTwo' onClick={() => handleRecadoDelete(index)}>Deletar</button>
      
          </div>
       

        ))}
         {/* <div>
         <Link to="/signin">&nbsp;<button className='botaoSair'>Sair</button></Link>
          </div> */}
      </div>
    </div>
  );
};

export default Recados;
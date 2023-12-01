'use client';

import  {useState} from "react";
import axios from'axios';
import './estilo/style.css';
const moment = require('moment');


export default function oi() {
  const [data, setdata] = useState({
    nomeCompleto: '',
    data: '',
    estadoCivil: '',
    endereco: '',
    telefone: '',
    email: '',
    rg: '',
    cep: '',
  });
  const [message, setMessage] = useState("");

  const ValorInput = e => setdata({ ...data, [e.target.name]: e.target.value });

  const sendMsg = async (e) => {
    e.preventDefault();


    console.log(`nomeCompleto: ${data.nomeCompleto}`);
    console.log(`data: ${data.data}`);
    console.log(`estadoCivil: ${data.estadoCivil}`);
    console.log(`endereco: ${data.endereco}`);
    console.log(`telefone: ${data.telefone}`);
    console.log(`email: ${data.email}`);
    console.log(`rg: ${data.rg}`);
    console.log(`cep: ${data.cep}`);

    const headers ={
      'Content-Type': 'application/json'
    }
    


    try {
      const response = await axios.post('http://localhost:8080/message/usuario', data, headers);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <main className="main">
      <form className="form" onSubmit={sendMsg}>
        <h1 className="h1">Cadastro de usuário</h1>
        <h2 className="h2">Informações pessoais</h2>
        {message ? <p>{message}</p> : ''}

        <label>
          Nome Completo:
          <input type="text" name="nomeCompleto" onChange={ValorInput} className="input"/>
        </label><br></br>

        <label>
          Data de Nascimento:
          <input type="text" name="data"  onChange={ValorInput} />

        </label><br></br>
        
       <label>
        ESTADO estadoCivil
        <input type="text" name="estadoCivil" onChange={ValorInput}></input>
       </label><br></br>
       

        <h2>Informações de Documentação</h2>

        <label>
          Enderenço:
          <input type="text" name="endereco"  onChange={ValorInput} />
        </label>

        <label>
          Telefone:
          <input type="text" name="telefone" onChange={ValorInput} />
        </label><br></br>

      
      <lable>
        EMAIL:
        <input type="email" name="email" onChange={ValorInput}></input>
      </lable><br></br>

      <label>
        RG:
        <input type="text" name="rg" onChange={ValorInput}></input>
      </label><br></br>

<label>
  CEP:
  <input type="cep"name="cep" onChange={ValorInput}></input>
</label>
        <ul className="ul">
          <li className="li">
            <button type="submit" className="botao">Enviar</button>
          </li>
        </ul>
      </form>
    </main>
  );
}

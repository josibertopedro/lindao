'use client'
import { useState } from "react";
import axios from 'axios';
import '../Cadastro/estilo/style.css';

export default function Produto() {

  // const [data, setdata] = useState({
  //   nomeVendedor: '',
  //   data: '',
  //   nomeProduto: '',
  //   descricao: '',
  //   preco: '',
  //   quantidade: ''
  // });

  // const [message, setMessage] = useState("");

  // const ValorInput = e => setdata({ ...data, [e.target.name]: e.target.value });

  // const sendMsg = async (e) => {
  //   e.preventDefault();
    // console.log(`nomeVendedor: ${data.nomeVendedor}`);
    // console.log(`data: ${data.data}`);
    // console.log(`nomeProduto: ${data.nomeProduto}`);
    // console.log(`descricao: ${data.descricao}`);
    // console.log(`preco: ${data.preco}`);
    // console.log(`quantidade: ${data.quantidade}`);

  //   const headers = {
  //     'Content-Type': 'application/json'
  //   }

  //   try {
  //     const response = await axios.post('http://localhost:8080/message/venda', data, headers);
  //     setMessage(response.data.message);

  //     // Limpar os campos após o envio bem-sucedido
  //     // setdata({
  //     //   nomeVendedor: '',
  //     //   data: '',
  //     //   nomeProduto: '',
  //     //   descricao: '',
  //     //   preco: '',
  //     //   quantidade: ''
  //     // });
  //   } catch (error) {
  //     setMessage(error.response.data.message);
  //   }
  // };

  const [data, setdata] = useState({
      nomeVendedor: '',
      data: '',
      nomeProduto: '',
      descricao: '',
      preco: '',
      quantidade: ''
  });

  const [message, setMessage] = useState("");

  const ValorInput = e => setdata({ ...data, [e.target.name]: e.target.value });

  const sendMsg = async (e) => {
    e.preventDefault();
    console.log(`nomeVendedor: ${data.nomeVendedor}`);
    console.log(`data: ${data.data}`);
    console.log(`nomeProduto: ${data.nomeProduto}`);
    console.log(`descricao: ${data.descricao}`);
    console.log(`preco: ${data.preco}`);
    console.log(`quantidade: ${data.quantidade}`);

    const headers ={
      'Content-Type': 'application/json'
    }
    


    try {
      const response = await axios.post('http://localhost:8080/message/venda', data, headers);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };




  return (
    <main>
      <form onSubmit={sendMsg}>
        <h1>Cadastro De VENDAS</h1>
        <h2>Informações De Produto</h2>
        {message ? <p>{message}</p> : ''}

        <label>Digite Nome DO Vendedor :</label>
        <input type="text" name="nomeVendedor" placeholder="Digite nome vendedor" onChange={ValorInput} /><br /><br />

        <label>Digite Data de Entrada:</label>
        {/* Corrigir o tipo do input para 'date' */}
        <input type="text" name="data" placeholder="Digite  a data" onChange={ValorInput} /><br /><br />

        <h2>Informações do Produto</h2>

        <label>Digite o Nome do Produto :</label>
        <input type="text" name="nomeProduto" placeholder="Digite o nome do produto" onChange={ValorInput} /><br /><br />

        <label>Descrição do Produto :</label>
        <textarea name="descricao" placeholder="Digite a descrição do produto" onChange={ValorInput}></textarea><br /><br />

        <label>Preço do Produto :</label>
        <input type="text" name="preco" placeholder="Digite o preço do produto" onChange={ValorInput} /><br /><br />

        <label>Quantidade em Estoque :</label>
        <input type="text" name="quantidade" placeholder="Digite a quantidade em estoque" onChange={ValorInput} /><br /><br />

        {/* Botões de submit */}
        <ul id="butao">
          <li><button type="submit">Enviar</button></li>
         
        </ul>
      </form>
    </main>
  );
}

'use client';
import { useState } from "react";



export default function Oi(){
    // declara uma nova variavel com state e atribuir o obj
    const[data,setdata] = useState({
        nomeCompleto :'',
        data :'',
        estadoCivil :'',
        enderco :'',
        telefone :'',
        email :'',
        rg :'',
        cep :''
      });
    //receber os dados dos campos 
    
    const ValorInput = e=> setdata({...data,[e.target.name]: e.target.value});   
 
    return(
    
                <main>
                  
                  <form>
                  <h1>Cadastro de usuario</h1>
               <h2>Informações pessoais</h2>
                 
                    <label>Digite Seu Nome Completo : </label>
                  <input type="text" name="nomeCompleto" placeholder="Digite seu nome" onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Sua Data De Nascimento: </label>
                  <input type="date" name="data" placeholder="Digite sua Data De Nascimento"onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Seu Estado Civil :</label>
                  <input type="text" name="estadoCivil" placeholder="Digite seu Estado Civil"onChange={ValorInput}/><br/><br/>
            
                  <h2>Informações de contanto</h2>
            
                  <label>Digite Seu Endereço : </label>
                  <input type="text" name="enderco" placeholder="Digite seu Endereço"onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Seu Telefone : </label>
                  <input type="number" name="telefone" placeholder="Digite seu telefone"onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Seu Email : </label>
                  <input type="email" name="email" placeholder="Digite seu Email"onChange={ValorInput}/><br/><br/>
            
                  <h2>Informações de Documentação</h2>
            
                  <label>Digite RG : </label>
                  <input type="number" name="rg" placeholder="Digite seu RG"onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Seu CPF : </label>
                  <input type="number" name="cpf" placeholder="Digite seu Email"onChange={ValorInput}/><br/><br/>
            
                  <label>Digite Cep : </label>
                  <input type="number" name="cep" placeholder="Digite seu CEP"onChange={ValorInput}/><br/><br/>
            
            
                <button type="submit">Enviar</button>
            
            
                  </form>
                </main>
    )
}

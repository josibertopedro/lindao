
"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: "",
    nomeCompleto: "",
    data: "",
    estadoCivil: "",
    endereco: "",
    telefone: "",
    email: "",
    rg: "",
    cep: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/message/venda/find");
        setUsuarios(response.data.data);
      } catch (error) {
        setError("Erro ao carregar usuários");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    await axios.delete(`http://localhost:8080/message/venda/${userId}`);
    const response = await axios.get("http://localhost:8080/message/venda/find");
    setUsuarios(response.data.data);
    console.log(`Deletar usuário com ID: ${userId}`);
  };

  const handleEdit = (userId) => {
    const userToEdit = usuarios.find((user) => user.id === userId);
    setEditMode(true);
    setEditedUser(userToEdit);
  };

  const saveChanges = async () => {
    try {
      await axios.put(`http://localhost:8080/message/venda/${editedUser.id}`, editedUser);
      const response = await axios.get("http://localhost:8080/message/venda/find");
      setUsuarios(response.data.data);
      setEditMode(false);
      setEditedUser({
        nomeVendedor: '',
        data: '',
        nomeProduto: '',
        descricao: '',
        preco: '',
        quantidade:''
      });
    } catch (error) {
      console.error("Erro ao editar usuário", error);
    }
  };

  return (
    <div>
      <h1>Lista de produtos</h1>
      {error && <p>{error}</p>}
      {usuarios.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>nomeVendedor</th>
              <th>Data</th>
              <th>nomeProduto</th>
              <th>descricao</th>
              <th>preco</th>
              <th>quantidade</th>
              
            </tr>
          </thead>
          <tbody>
            {usuarios.map((venda) => (
              <tr key={venda.id}>
                <td>{venda.nomeVendedor}</td>
                <td>{venda.data}</td>
                <td>{venda.nomeProduto}</td>
                <td>{venda.descricao}</td>
                <td>{venda.preco}</td>
                <td>{venda.quantidade}</td>
                
                <td>
                  <button onClick={() => handleDelete(venda.id)} type="button">Deletar</button>
                  <button onClick={() => handleEdit(venda.id)} type="button">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
 {editMode && (
        <div>
          <h2>Editar Usuário</h2>
          <label>
            Nome  vendedor:
            <input type="text" name="nomeVendedor" value={editedUser.nomeVendedor} onChange={(e) => setEditedUser({ ...editedUser, nomeVendedor: e.target.value })} />
          </label><br></br>

          <label>
            Data da venda:
            <input type="text" name="data" value={editedUser.data} onChange={(e) => setEditedUser({ ...editedUser, data: e.target.value })} />
          </label><br></br>

          <label>
            nome do produto:
            <input type="text" name="nomeProduto" value={editedUser.nomeProduto} onChange={(e) => setEditedUser({ ...editedUser, nomeProduto: e.target.value })} />
          </label><br></br>

          <label>
            descricao:
            <input type="text" name="descricao" value={editedUser.descricao} onChange={(e) => setEditedUser({ ...editedUser, descricao: e.target.value })} />
          </label><br></br>

          <label>
            preco:
            <input type="text" name="preco" value={editedUser.preco} onChange={(e) => setEditedUser({ ...editedUser, preco: e.target.value })} />
          </label><br></br>

          <label>
          quantidade :
            <input type="text" name="quantidade" value={editedUser.quantidade} onChange={(e) => setEditedUser({ ...editedUser, quantidade: e.target.value })} />
          </label><br></br>

          

          <button onClick={saveChanges} type="button">Salvar Alterações</button>
        </div>
      )}
    </div>
  );
}
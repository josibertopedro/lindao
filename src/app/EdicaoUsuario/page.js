
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
        const response = await axios.get("http://localhost:8080/message/usuario/Edicao");
        setUsuarios(response.data.data);
      } catch (error) {
        setError("Erro ao carregar usuários");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    await axios.delete(`http://localhost:8080/message/usuario/${userId}`);
    const response = await axios.get("http://localhost:8080/message/usuario/Edicao");
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
      await axios.put(`http://localhost:8080/message/usuario/${editedUser.id}`, editedUser);
      const response = await axios.get("http://localhost:8080/message/usuario/Edicao");
      setUsuarios(response.data.data);
      setEditMode(false);
      setEditedUser({
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
    } catch (error) {
      console.error("Erro ao editar usuário", error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {error && <p>{error}</p>}
      {usuarios.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>Data de Nascimento</th>
              <th>Estado Civil</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>RG</th>
              <th>CEP</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nomeCompleto}</td>
                <td>{usuario.data}</td>
                <td>{usuario.estadoCivil}</td>
                <td>{usuario.endereco}</td>
                <td>{usuario.telefone}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rg}</td>
                <td>{usuario.cep}</td>
                <td>
                  <button onClick={() => handleDelete(usuario.id)} type="button">Deletar</button>
                  <button onClick={() => handleEdit(usuario.id)} type="button">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}

      {editMode && (
        <div>
          <h2>Editar Usuário</h2>
          <label>
            Nome Completo:
            <input type="text" name="nomeCompleto" value={editedUser.nomeCompleto} onChange={(e) => setEditedUser({ ...editedUser, nomeCompleto: e.target.value })} />
          </label><br></br>

          <label>
            Data de Nascimento:
            <input type="text" name="data" value={editedUser.data} onChange={(e) => setEditedUser({ ...editedUser, data: e.target.value })} />
          </label><br></br>

          <label>
            Estado Civil:
            <input type="text" name="estadoCivil" value={editedUser.estadoCivil} onChange={(e) => setEditedUser({ ...editedUser, estadoCivil: e.target.value })} />
          </label><br></br>

          <label>
            Endereço:
            <input type="text" name="endereco" value={editedUser.endereco} onChange={(e) => setEditedUser({ ...editedUser, endereco: e.target.value })} />
          </label><br></br>

          <label>
            Telefone:
            <input type="text" name="telefone" value={editedUser.telefone} onChange={(e) => setEditedUser({ ...editedUser, telefone: e.target.value })} />
          </label><br></br>

          <label>
            Email:
            <input type="email" name="email" value={editedUser.email} onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })} />
          </label><br></br>

          <label>
            RG:
            <input type="text" name="rg" value={editedUser.rg} onChange={(e) => setEditedUser({ ...editedUser, rg: e.target.value })} />
          </label><br></br>

          <label>
            CEP:
            <input type="text" name="cep" value={editedUser.cep} onChange={(e) => setEditedUser({ ...editedUser, cep: e.target.value })} />
          </label><br></br>

          <button onClick={saveChanges} type="button">Salvar Alterações</button>
        </div>
      )}
    </div>
  );
}


import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <div>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title text-warning">Usuários</h1>
          <p className="card-text">Veja todos os usuários cadastrados.</p>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome de usuário</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-warning mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Users;

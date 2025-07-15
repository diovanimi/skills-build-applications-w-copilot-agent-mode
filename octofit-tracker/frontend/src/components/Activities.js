
import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/activity/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Erro ao buscar atividades:', error));
  }, []);

  return (
    <div>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title text-primary">Atividades</h1>
          <p className="card-text">Veja todas as atividades registradas pelos alunos.</p>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Usuário</th>
                <th>Tipo</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user && typeof activity.user === 'object' ? activity.user.username : activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Activities;

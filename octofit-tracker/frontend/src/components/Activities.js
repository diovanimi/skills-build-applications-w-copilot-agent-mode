import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/activity/?format=api')
      .then(async response => {
        if (!response.ok) throw new Error('Erro ao buscar atividades');
        const text = await response.text();
        try {
          return JSON.parse(text);
        } catch (e) {
          throw new Error('Resposta inesperada da API. Verifique se a URL está correta e o backend está rodando.');
        }
      })
      .then(data => {
        setActivities(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-4">Carregando atividades...</div>;
  if (error) return <div className="alert alert-danger mt-4">{error}</div>;

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
              {activities.length === 0 ? (
                <tr><td colSpan={3} className="text-center">Nenhuma atividade encontrada.</td></tr>
              ) : (
                activities.map(activity => (
                  <tr key={activity._id || Math.random()}>
                    <td>{activity.user && typeof activity.user === 'object' ? activity.user.username : activity.user || '-'}</td>
                    <td>{activity.activity_type || '-'}</td>
                    <td>{activity.duration || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button className="btn btn-primary mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Activities;

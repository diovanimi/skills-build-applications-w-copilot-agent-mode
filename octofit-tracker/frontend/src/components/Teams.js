
function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Erro ao buscar equipes:', error));
  }, []);

  return (
    <div>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title text-info">Equipes</h1>
          <p className="card-text">Veja as equipes e seus membros.</p>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome</th>
                <th>Membros</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members.map(m => m.username).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-info mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Teams;

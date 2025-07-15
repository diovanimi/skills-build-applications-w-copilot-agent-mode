
function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Erro ao buscar leaderboard:', error));
  }, []);

  return (
    <div>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title text-success">Leaderboard</h1>
          <p className="card-text">Veja o ranking dos alunos de Mergington High School.</p>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Usuário</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;

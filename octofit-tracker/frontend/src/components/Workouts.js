
function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://special-funicular-vq9g5j9xqqvhq67-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Erro ao buscar treinos:', error));
  }, []);

  return (
    <div>
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title text-danger">Treinos</h1>
          <p className="card-text">Veja todos os treinos disponíveis.</p>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-danger mt-3" onClick={() => window.location.reload()}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default Workouts;


import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

          function App() {
            return (
              <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                  <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>

                    import logo from '../public/octofitapp-small.png';
                        <li className="nav-item"><Link className="nav-link" to="/workouts">Treinos</Link></li>

                    function App() {
                      return (
                        <Router>
                          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                            <div className="container-fluid">
                              <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
                                <img src={logo} alt="OctoFit Logo" className="App-logo me-2" />
                                OctoFit Tracker
                              </Link>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                  <li className="nav-item"><Link className="nav-link" to="/activities">Atividades</Link></li>
                                  <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                                  <li className="nav-item"><Link className="nav-link" to="/teams">Equipes</Link></li>
                                  <li className="nav-item"><Link className="nav-link" to="/users">Usuários</Link></li>
                                  <li className="nav-item"><Link className="nav-link" to="/workouts">Treinos</Link></li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                          <div className="container mt-4">
                            <Routes>
                              <Route path="/activities" element={<Activities />} />
                              <Route path="/leaderboard" element={<Leaderboard />} />
                              <Route path="/teams" element={<Teams />} />
                              <Route path="/users" element={<Users />} />
                              <Route path="/workouts" element={<Workouts />} />
                              <Route path="/" element={
                                <div className="card shadow-sm p-4 mb-4 bg-white rounded">
                                  <h1 className="display-4 text-primary mb-3">Bem-vindo ao OctoFit Tracker</h1>
                                  <p className="lead">Acompanhe atividades, equipes, leaderboard e treinos dos alunos de Mergington High School.</p>
                                  <Link to="/activities" className="btn btn-primary btn-lg m-2">Ver Atividades</Link>
                                  <Link to="/leaderboard" className="btn btn-success btn-lg m-2">Ver Leaderboard</Link>
                                  <Link to="/teams" className="btn btn-info btn-lg m-2">Ver Equipes</Link>
                                  <Link to="/users" className="btn btn-warning btn-lg m-2">Ver Usuários</Link>
                                  <Link to="/workouts" className="btn btn-danger btn-lg m-2">Ver Treinos</Link>
                                </div>
                              } />
                            </Routes>
                          </div>
                        </Router>
                      );
                    }

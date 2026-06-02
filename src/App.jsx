import { BrowserRouter as Router, Route, Routes, Navigate, Link} from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetail from './pages/UserDetail'
import FavoritesPage from "./pages/FavoritesPage"
import './App.css'


function App() {
  return (
  <Router>
    <div>
      <header className="app-header">
       <h1>PROYECTO REACT</h1>
       <nav>
        <Link className="nav-button" to="/">
         Usuarios
        </Link>
        <Link className="nav-button" to="/favorites">
         Favoritos
        </Link>
        </nav>
     </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
     </main>
     </div>
 </Router>
  );
}

export default App;

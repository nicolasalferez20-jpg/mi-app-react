import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UserDetail from './pages/UserDetail'


function App() {
  return (
  <Router>
    <div>
      <header className="app-header">
       <h1>PROYECTO REACT</h1>
     </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
     </main>
     </div>
 </Router>
  );
}

export default App;

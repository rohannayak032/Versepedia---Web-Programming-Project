import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Charts from './pages/Charts'
import ArtistList from './pages/ArtistList'
import Artist from './pages/Artist'
import SongDetails from './pages/SongDetails'
import NewsArticle from './pages/NewsArticle'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for saved preference
    const saved = localStorage.getItem('versepedia-theme');
    return saved === 'dark';
  });

  useEffect(() => {
    // Apply class to body for global theme support
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('versepedia-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('versepedia-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <header>
          <h1>Versepedia</h1>
          <nav>
              <Link to="/">Featured</Link>
              <Link to="/charts">Charts</Link>
              <Link to="/artists">Artists</Link>
              <button 
                onClick={toggleDarkMode} 
                style={{ 
                  marginLeft: '20px', 
                  background: 'var(--accent)', 
                  color: '#000',
                  border: '2px solid #000', 
                  cursor: 'pointer', 
                  padding: '5px 15px',
                  fontWeight: '900',
                  fontSize: '13px',
                  textTransform: 'uppercase'
                }}
              >
                {darkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
          </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/song/:id" element={<SongDetails />} />
          <Route path="/news/:id" element={<NewsArticle />} />
        </Routes>
      </main>
    </>
  )
}

export default App

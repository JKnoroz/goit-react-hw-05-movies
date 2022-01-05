import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage';
import './App.css';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;

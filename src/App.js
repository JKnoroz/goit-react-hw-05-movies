// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage';
import MovieDetailsPage from './components/views/MovieDetailsPage';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import { animateScroll as scroll } from 'react-scroll';

import './App.css';
// import 'react-toastify/dist/ReactToastify.css';

// import SearchBar from './components/Searchbar/Searchbar';
// import imagesAPI from './services/images-api';
// import LoaderSpinner from './components/Loader/Loader';

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

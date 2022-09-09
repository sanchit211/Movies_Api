import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import ErrorPage from './ErrorPage';
import './App.css'

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<SingleMovie/>}/>
    <Route path="*" element={<ErrorPage/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;

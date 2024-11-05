import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ListViewPage from './pages/ListViewPage';
import DetailViewPage from './pages/DetailViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListViewPage />} />
        <Route path="/detail/:id" element={<DetailViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;

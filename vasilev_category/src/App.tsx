import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from './components/categoryList';
import CategoryDetails from './components/categoryDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

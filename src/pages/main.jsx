import React from 'react';
import ReactDOM from 'react-dom/client';
import IndexPage from './index';
import Faq from './faq';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>

);

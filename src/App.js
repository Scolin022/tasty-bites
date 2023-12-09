import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import RegisterForm from './RegisterForm';

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="App-header">
          <Header/>
        </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          {/* 
          <Route path="/SavedRecipesPage" element={<SavedRecipesPage />} />
          <Route path="/LoginPage" element={<LoginPage />} /> 
          */}
        </Routes>
        <div>
          {/* <Footer /> */}
          <RegisterForm />
        </div>
      </div>
    </Router>
  );
}
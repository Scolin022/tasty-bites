import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import RegisterForm from './users/account/RegisterForm';
import Header from './AppHeaders';
import AppFooter from './AppFooter';
import LoginSucessful from './users/account/ConfirmationPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/ConfirmationPage" element={<LoginSucessful />} />
          {/* 
          <Route path="/SavedRecipesPage" element={<SavedRecipesPage />} />
          <Route path="/LoginPage" element={<LoginPage />} /> 
          */}
        </Routes>
        <div>
          <AppFooter />
        </div>
      </div>
    </Router>
  );
}
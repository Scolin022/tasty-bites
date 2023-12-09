import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage';
import SignUp from './pages/form/SignUpPage';
import Header from './components/Headers';
import AppFooter from './components/AppFooter';
import SignUpSucessful from './pages/form/ConfirmationPage';
import ContactUs from './pages/form/ContactUsPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/pages/HomePage" element={<Home />} />
          <Route path="/users/account/SignUpPage" element={<SignUp />} />
          <Route path="/ConfirmationPage" element={<SignUpSucessful />} />
          <Route path="/pages/form/ContactUsPage" element={<ContactUs />} />
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
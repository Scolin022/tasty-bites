import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage';
import SignUp from './pages/form/SignUpPage';
import Login from './pages/form/LoginPage';
import Header from './components/Headers';
import AppFooter from './components/AppFooter';
import SignUpSucessful from './pages/form/ConfirmationPage';
import ContactUs from './pages/form/ContactUsPage';
import AddRecipe from './pages/form/AddRecipePage';
import SavedRecipes from './pages/SavedRecipesPage';
import LoginAdmin from './pages/form/AdminLoginPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/pages/HomePage" element={<Home />} />
          <Route path="/pages/form/SignUpPage" element={<SignUp />} />
          <Route path="/pages/SavedRecipesPage" element={<SavedRecipes />} />
          <Route path="/ConfirmationPage" element={<SignUpSucessful />} />
          <Route path="/pages/form/LoginPage" element={<Login />} />
          <Route path="/pages/form/AddRecipePage" element={<AddRecipe />} />
          <Route path="/pages/form/ContactUsPage" element={<ContactUs />} />
          <Route path="/pages/form/AdminLoginPage" element={<LoginAdmin />} />
        </Routes>
        <div>
          <AppFooter />
        </div>
      </div>
    </Router>
  );
}
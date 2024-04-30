import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components/NavBar/theme-provider";
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import MyListsPage from './components/MyListsPage/MyListsPage';
import DiscoverPage from './components/DiscoverPage/DiscoverPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Router basename="/Tome">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              
            </>
          } />
          <Route path="/mylists" element={<MyListsPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>

  );
}

export default App;

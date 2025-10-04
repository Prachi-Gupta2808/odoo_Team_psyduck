// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import Footer from './components/footer.jsx';
import Home from './page/home.jsx';
import Signup from './page/signup.jsx';
import Login from './page/login.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">


        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>

        <div className="flex flex-1">

          <Routes>
            <Route path="/" element={<Sidebar />} />
          </Routes>

          <main className="flex-1 bg-gray-50 p-6">
            <Routes>

              <Route path="/" element={<Home />} />


              <Route path="/signup" element={<Signup />} />

       
              <Route path="/login" element={<Login />} />


              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>


        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

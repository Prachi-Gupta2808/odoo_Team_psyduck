// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import Footer from "./components/footer.jsx";

// Pages
import Home from "./page/home.jsx";
import Signup from "./page/signup.jsx";
import Login from "./page/login.jsx";
import AdminPortal from "./page/admin/adminportal.jsx";
import ManagerPortal from "./page/manager/managerportal.jsx";
import EmployeePortal from "./page/employee/employeeportal.jsx";
import AdminDashboard from "./page/admin/admindashboard.jsx";
import ManagerDashboard from "./page/manager/managerdashboard.jsx";
import EmployeeDashboard from "./page/employee/employeedashboard.jsx";

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Full layout pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <div><Home/></div>
            </MainLayout>
          }
        />
        <Route
          path="/admin/"
          element={
            <MainLayout>
              <AdminPortal/>
            </MainLayout>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <MainLayout>
              <AdminDashboard/>
            </MainLayout>
          }
        />
          <Route
          path="/manager/"
          element={
            <MainLayout>
              <ManagerPortal/>
            </MainLayout>
          }
        />
           <Route
          path="/manager/dashboard"
          element={
            <MainLayout>
              <ManagerDashboard/>
            </MainLayout>
          }
        />
        <Route
          path="/employee/"
          element={
            <MainLayout>
              <EmployeePortal/>
            </MainLayout>
          }
        />
        <Route
          path="/employee/dashboard/"
          element={
            <MainLayout>
              <EmployeeDashboard/>
            </MainLayout>
          }
        />

        {/* Full-screen pages (no navbar/sidebar/footer) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

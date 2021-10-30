import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appoinments from "./components/pages/admin/Appoinments.js";
import Dashboard from "./components/pages/admin/Dashboard.js";
import Doctors from "./components/pages/admin/Doctors.js";
import Patients from "./components/pages/admin/Patients.js";
import Prescriptions from "./components/pages/admin/Prescriptions.js";
import Settings from "./components/pages/admin/Settings.js";
import Home from "./components/pages/frontend/Home.js";
import Login from "./components/pages/frontend/Login.js";
import PrivateRoute from "./components/PrivateRoute.js";
import PublicRoute from "./components/PublicRoute.js";
import { AuthProvider } from "./contexts/AuthContext.js";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* Admin Dashboard Route*/}
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/appoinments">
            <Appoinments />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/doctors">
            <Doctors />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/patients">
            <Patients />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/prescriptions">
            <Prescriptions />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/setting">
            <Settings />
          </PrivateRoute>

          {/* Frontend Route */}
          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>

          {/* 404 route */}
          <Route exact path="*">
            <h4>Not Found</h4>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

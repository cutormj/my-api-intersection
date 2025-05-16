import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleSignIn from "./components/GoogleSignIn";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = sessionStorage.getItem("user") !== null;
  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/profile" /> : <GoogleSignIn />} />
        <Route path="/signin" element={<GoogleSignIn />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>

  );
}

export default App;
import './App.css'
import ListPersonComponent from "./components/ListPersonComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PersonComponent from "./components/PersonComponent.jsx";
import LoginComponent from "./components/security/LoginComponent.jsx";
import SignupComponent from "./components/security/SignupComponent.jsx";
import VerifyAccountComponent from "./components/security/VerifyAccountComponent.jsx";
import PrivateRoute from "./components/security/PrivateRoute.jsx";
import ProfileComponent from "./components/ProfleComponent.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/login" element={<LoginComponent />}></Route>
                <Route path="/signup" element={<SignupComponent />}></Route>
                <Route path="/verify" element={<VerifyAccountComponent />}></Route>

                {/* Protected */}
                <Route path="/" element={<PrivateRoute><ListPersonComponent /></PrivateRoute>}></Route>
                <Route path="/persons" element={<PrivateRoute><ListPersonComponent /></PrivateRoute>}></Route>
                <Route path="/add-person" element={<PrivateRoute><PersonComponent /></PrivateRoute>}></Route>
                <Route path="/edit-person/:id" element={<PrivateRoute><PersonComponent /></PrivateRoute>}></Route>
                <Route path="/profile" element={<PrivateRoute><ProfileComponent /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import ListPersonComponent from "./components/ListPersonComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PersonComponent from "./components/PersonComponent.jsx";
import LoginComponent from "./components/security/LoginComponent.jsx";
import SignupComponent from "./components/security/SignupComponent.jsx";
import VerifyAccountComponent from "./components/security/VerifyAccountComponent.jsx";
import PrivateRoute from "./components/security/PrivateRoute.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route path="/login" element={<LoginComponent />}></Route>
                <Route path="/signup" element={<SignupComponent />}></Route>
                <Route path="/verify" element={<VerifyAccountComponent />}></Route>

                {/* Protect these routes */}
                <Route path="/" element={<PrivateRoute><ListPersonComponent /></PrivateRoute>}></Route>
                <Route path="/persons" element={<PrivateRoute><ListPersonComponent /></PrivateRoute>}></Route>
                <Route path="/add-person" element={<PrivateRoute><PersonComponent /></PrivateRoute>}></Route>
                <Route path="/edit-person/:id" element={<PrivateRoute><PersonComponent /></PrivateRoute>}></Route>
            </Routes>
            {/*<Routes>*/}
            {/*    /!* http://localhost:3000 *!/*/}
            {/*    <Route path='/' element = { <ListPersonComponent/> }></Route>*/}
            {/*    /!* http://localhost:3000/persons *!/*/}
            {/*    <Route path='/persons' element = { <ListPersonComponent/> }></Route>*/}
            {/*    /!* http://localhost:3000/add-person *!/*/}
            {/*    <Route path='/add-person' element = { <PersonComponent/> }></Route>*/}
            {/*    /!* http://localhost:3000/edit-person/1 *!/*/}
            {/*    <Route path='/edit-person/:id' element = { <PersonComponent/> }></Route>*/}
            {/*</Routes>*/}
        </BrowserRouter>
    </>
  )
}

export default App

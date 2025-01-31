import './App.css'
import ListPersonComponent from "./components/ListPersonComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PersonComponent from "./components/PersonComponent.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                {/* http://localhost:3000 */}
                <Route path='/' element = { <ListPersonComponent/> }></Route>
                {/* http://localhost:3000/persons */}
                <Route path='/persons' element = { <ListPersonComponent/> }></Route>
                {/* http://localhost:3000/add-person */}
                <Route path='/add-person' element = { <PersonComponent/> }></Route>
                {/* http://localhost:3000/edit-person/1 */}
                <Route path='/edit-person/:id' element = { <PersonComponent/> }></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

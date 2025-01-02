import './App.css'
import Header from './Header'
import Footer from './Footer'
import ToDoList from './ToDoList'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/Day-Organiser/' element={<main className="main-content-wrap"><ToDoList /></main>}></Route>
            <Route path='/Day-Organiser/contact/' element={<main className="main-content-wrap"><Contact /></main>}></Route>
          </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

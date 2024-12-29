import './App.css'
import Header from './Header'
import Footer from './Footer'
import ToDoList from './ToDoList'

function App() {
  return (
    <>
      <Header />
      <main className="main-content-wrap">
        <ToDoList />
      </main>
      <Footer />
    </>
  )
}

export default App

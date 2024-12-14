import './App.css'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Scroll from './Components/Scroll'
// import Home from './Pages/Home'
import AllRouter from './Routers/AllRouter'

function App() {

  return (
    <>
      <Scroll/>
      <Navbar />
      <Categories />
      <AllRouter/>
      <Footer/>
    </>
  )
}

export default App

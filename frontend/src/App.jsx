import Home from "./pages/Home"
import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar"
import { MovieProvider } from "./contexts/MovieContext";
function App() {
    
   return(
    <>  
      <MovieProvider>
        <NavBar></NavBar>
      <main className="main-content">
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/favorites" element={<Favorites></Favorites>}></Route>
       </Routes>

      </main>
      </MovieProvider>
    </>
   );
}


export default App

import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Page/Home'
import About from './Page/About'
import Team from './Page/Team'
import Blog from './Page/Blog'
import TeamAdd from './Page/TeamAdd'

function App() {
 
  return (
    <>
       <BrowserRouter>
          <Header/>
          <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/team' element={<Team/>}></Route>
             <Route path='/blog' element={<Blog/>}></Route>
             <Route path='/team-add' element={<TeamAdd/>}></Route>
          </Routes>
       </BrowserRouter>
     
    </>
  )
}

export default App

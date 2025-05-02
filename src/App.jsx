import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Comments from "./pages/Comments"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CreatePosts from "./pages/CreatePosts"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { auth } from "./firebase_config"

function App() {



  useEffect(() => {
    console.log(auth.currentUser)
  }, [auth])
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='comments' element={<Comments />} />
        </Route> 
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createPosts" element={<CreatePosts />} />
      </Routes>
    </>
  )
}

export default App

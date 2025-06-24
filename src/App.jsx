import React, { useContext } from 'react'
import HomeRoutes from "./routes/Home";
import Home from './pages/Home'
import Login from './pages/Login'
import { Context } from "./context/Context"

const App = () => {
  const {token} = useContext(Context)
  
  if(token){
    return <HomeRoutes/>  
  }else{
    return <Login/>

  }
}

export default App
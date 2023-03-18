import Abuelo from "../../components/Ejemplo/Abuelo";
import UserContext from "../../context/UserContext";
import { useContext, useEffect } from "react";
const Home = () => {

  const {verifyToken, userState} = useContext(UserContext)
  
  const user = userState.info2

  return (
    <div>
      <h1>Bienvenido, {user.email}</h1>
      <Abuelo />
    </div>
  )
}

export default Home;
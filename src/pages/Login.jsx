import { useNavigate } from "react-router-dom"




const Login = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=> navigate("layout/dashboard")}>
      LOGIN
    </div>
  )
}

export default Login


import { useEffect ,React} from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute (props){
  const {Component} = props;
  const Navigate = useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('authToken')
   
    if(!login){
      Navigate('/')
    }
  })
  return (
    <>
     <Component />
    </>
  )
}

export default ProtectedRoute;



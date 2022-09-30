
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import './Register.css'


const registerObject =
{
  firstName: "Abhi",
  middleName: "Chandrakant",
  lastName: "Suryawanshi",
  emailId: "abhi@psoft.net",
  isActiveStatus: true,
  passwordEntity: {
    currentPassword: "abc123",
    expiryDate: "07/12/2025"
  }
}

function Register() {

  useEffect(() => {

  }, [])


  let navigate = useNavigate();
  const Change = () => {
    let path = '/';
    navigate(path);
  }



  const registorApi = (item) => {
    registerObject.firstName = firstName;
    registerObject.middleName = middleName;
    registerObject.lastName = lastName;
    registerObject.emailId = emailId;
    registerObject.password = password;
    // let navigate = useNavigate();
    axios
      .post('http://localhost:9091/rest/v1/user/signup', registerObject)
      .then((response) => {
        // console.log(response.registerObject)

      })
      .catch((error) => console.log(error));


    Change()
  }


  const [firstName, setfirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");


  const handleSubmit = event => {
    event.preventDefault();
    // console.log('You have submitted the form.')
  }


  function signup() {

    let item = { firstName, middleName, lastName, emailId, password }
    console.log(item)
    registorApi(item)
  }
  return (

    <div className="f-login">


      <form onSubmit={handleSubmit}>
        <div className="f-form-inner">

          <br /><br /> <br />

          <h2>Registration form</h2>
          <br />
          <div className="f-form-group">
            <label>FirstName:</label>
            <input type="text" className='btn-css' value={firstName} onChange={(e) => setfirstName(e.target.value)} name="firstName"  autoComplete="off" />
          </div>
          <br />
          <div className="f-form-group">
            <label>MiddleName:</label>
            <input type="text" className='btn-css' value={middleName} onChange={(e) => setmiddleName(e.target.value)} name="middleName"  autoComplete="off" />
          </div>
          <br />

          <div className="f-button">
            <label>LastName:</label>
            <input type="text" className='btn-css' value={lastName} onChange={(e) => setlastName(e.target.value)} name="lastName"  autoComplete="off" />
          </div>

          <br />

          <div className="f-button">

            <label>EmailId:</label>
            <input type="text" className='btn-css' value={emailId} onChange={(e) => setemailId(e.target.value)} name="emailId"  autoComplete="off" />
          </div>
          <br />

          <div className="f-button">
            <label>Password:</label>
            <input type="text" className='btn-css' value={password} onChange={(e) => setpassword(e.target.value)} name="password"  autoComplete="off" />

          </div>
          <br />

        </div>
        <br />
        <button onClick={signup} className="btn btn-secondary">Sing Up</button>
      </form>
    </div>






    // <div id="register" className='container'>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Registration form</h1>
    //     <div className="ui divider"></div>
    //     <div className='ui form'>
    //       <div className='fild'>
    //         <label>FirstName:</label>
    //         <input type="text" className='btn-css' value={firstName} onChange={(e) => setfirstName(e.target.value)} name="firstName" placeholder='firstName' />
    //       </div>

    //       <div className='fild'>
    //         <label>MiddleName:</label>
    //         <input type="text" className='btn-css' value={middleName} onChange={(e) => setmiddleName(e.target.value)} name="middleName" placeholder='middleName' />
    //       </div>

    //       <div className='fild'>
    //         <label>LastName:</label>
    //         <input type="text" className='btn-css' value={lastName} onChange={(e) => setlastName(e.target.value)} name="lastName" placeholder='lastName' />
    //       </div>

    //       <div className='fild'>
    //         <label>EmailId:</label>
    //         <input type="text" className='btn-css' value={emailId} onChange={(e) => setemailId(e.target.value)} name="emailId" placeholder='emailId' />
    //       </div>

    //       <div className='fild'>
    //         <label>Password:</label>
    //         <input type="text" className='btn-css'  value={password} onChange={(e) => setpassword(e.target.value)} name="password" placeholder='password' />
    //       </div>


    //     </div>
    //     <br />
    //     <button onClick={signup} className="btn btn-primary">Sing Up</button>
    //   </form>
    // </div>



  )
}

export default Register
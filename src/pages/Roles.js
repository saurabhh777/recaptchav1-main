import React, { useEffect, useState } from 'react'
import RoleAccordion from '../components/RoleAccordion';
import axios from "axios"
import './Roles.css'


const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("refreshToken")
};


const objectRole = {
  roleName: "HR",
  features: [
    // {
    //   featureName: "ADD_USER",
    //   description: "desc",
    //   isActiveStatus: true
    // }
  ]
}



function Roles() {

  const [select, setSelected] = useState('');
  const [roles, setRoles] = useState([]);



  useEffect(() => {
    getallRole()
  }, [])

  let getallRole = () => {
    axios
      .get('http://localhost:9091/rest/v1/role/get-all-roles', { headers })
      .then((response) => {
        console.log(response.data);
        setRoles(response.data)
      })
      .catch((error) => console.log(error));
  };






  const postRole = () => {

    objectRole.roleName = roleName;

    axios
      .post('http://localhost:9091/rest/v1/role/create-role', objectRole,{ headers })
      .then((response) => {
        console.log(response.objectRole.data)
       
      })
      .catch((error) => console.log(error));
  }


  const [roleName, setroleName] = useState("");

  function handleButtonClick() {
    let item = { roleName }
    console.log(item)
    postRole()
    window.location.reload()
   
  }
  

  return (
    <div >
      <div >
        <form >

          <select
            disabled={false}
            value={select}
            onChange={(e) => setSelected(e.currentTarget.value)}
          >
            {roles.map(data => (
              <option key={data.roleName} value={data.roleName}>
                {data.roleName}
              </option>
            ))}
          </select>
          &nbsp;&nbsp;

          <span><i onClick={handleButtonClick} className="fa fa-plus-circle"  ></i>

          </span>
          <hr className='hr' />
          <div className='Role-Name'>
            <label>Role Name:</label>
          <input type="text" value={roleName} onChange={(e) => setroleName(e.target.value)} name="RoleName"  autoComplete="off"/>
          </div>
          <br /> <br />
          <RoleAccordion />
        </form>
      </div>
    </div>



  );
}

export default Roles

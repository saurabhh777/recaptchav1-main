
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from "axios"
// import Form  from 'Form'
import './ProjectManagement.css'


const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + localStorage.getItem("refreshToken")
};


const objectProject = {
  projectName: "Intranet",
  description: "desc",

  features: [
    {
      featureName: "ADD_USER",
      description: "desc",
      isActiveStatus: true
    },
    {
      featureName: "ADD_EMPLOYEE",
      description: "desc",
      isActiveStatus: true
    },
    {
      featureName: "VIEW_USER",
      description: "desc",
      isActiveStatus: true
    }
  ]
}


function ProjectManagement() {

  



  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const abc = [...val, []]
    setVal(abc)

  }
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val]
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata)
  }

  const handleDelete = (i) => {
    const deletVal = [...val]
    deletVal.splice(i, 1)
    setVal(deletVal)
  }
  // console.log(val)


  const postProject = () => {
    objectProject.project = project;

    axios
      .post('http://localhost:9091/rest/v1/project/create-project', objectProject, { headers })
      .then((response) => {
        console.log(response.objectProject.data)
      })
      .catch((error) => console.log(error));
  }

   const [data,setData] =useState([])
    
  // let data = [];
  const [project, setProject] = useState('')


  function Save() {



    console.log(val.length)
    let features = [""]

    for (let i = 0; i < val.length; i++) {

      // f={
      //   data
      // };

    }


    // features.push(f)
    let item = { project }
    console.log(item)
    postProject(item)
  }


  return (

    <div className="Projectmanagement">
      <form>
        <h2>Project Management</h2>
        <div>
          <div className='Role-Name'>
            <label>Project Name: </label>
            <input type="text" name="RoleName" autoComplete="off" />
          </div>
        </div>
        <Button className='button-project' variant="secondary" value={project} onChange={(e) => setProject(e.target.value)} onClick={() => handleAdd()}>Add Features</Button>

        {val.map((data, i) => {
          // data.push()
          console.log(data)
          return (
            <div >
              <input value={data} onChange={e => handleChange(e, i)} />
              <Button className='button-x' variant="danger" onClick={() => handleDelete(i)} >Delete</Button>
            </div>
          )
        })}

        <div className='button-save'>
          <Button variant="success" onClick={Save} >Save</Button>
        </div>
      </form>

    </div>
  );
}
export default ProjectManagement;
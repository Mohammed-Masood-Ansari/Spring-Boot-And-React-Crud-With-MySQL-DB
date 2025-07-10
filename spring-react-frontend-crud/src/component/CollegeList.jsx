import React, {useEffect, useState} from 'react'
import { deleteCollegeById, listCollege } from '../services/CollegeServices'
import { useNavigate } from 'react-router-dom'

const CollegeList = () => {

    //call rest api to fetch all college data
    const [colleges, setCollege] = useState([])

    const navigator = useNavigate();
    

    useEffect(()=>{
      getAllEmployees();
    }, [])

    function getAllEmployees(){
          listCollege().then((Response)=>{
            setCollege(Response.data);
        }).catch(error=>console.error(error))
    }

    //dummy data 
    // const dummyData=[

    //     {
    //         "collegeId":"123",
    //         "collegeName":"HKBK COLLEGE OF ENGINEERING",
    //         "collegeAddress":"Govindpura Bangalore Near Manyata Tech Park",
    //         "collegePinCode":"560045"
    //     },
    //     {
    //         "collegeId":"124",
    //         "collegeName":"KNSIT COLLEGE OF ENGINEERING",
    //         "collegeAddress":"Maleshawaram",
    //         "collegePinCode":"560071"
    //     }
    
    // ]

    //function will call addcollege.jsx to register college
    function addNewCollege(){
      navigator('/add-college');
    }

    function editCollege(id){
      navigator(`/edit-college/${id}`);
    }

    function deleteCollege(id){
       console.log(id);

       deleteCollegeById(id).then((response)=>{
           getAllEmployees();
       }).catch(error=>{
         console.error(error);
       })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Colleges</h2>
        <button className="btn btn-primary" onClick={addNewCollege}>AddCollege</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>CollegeId</th>
                    <th>CollegeName</th>
                    <th>CollegeAddress</th>
                    <th>CollegePinCode</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    colleges.map(college=>

                <tr key={college.collegeId}>
                    <td>{college.collegeId}</td>
                    <td>{college.collegeName}</td>
                    <td>{college.collegeAddress}</td>
                    <td>{college.collegePinCode}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>deleteCollege(college.collegeId)}>DELETE</button>
                    </td>
                    <td>
                        <button className='btn btn-info' onClick={()=>editCollege(college.collegeId)}>EDIT</button>
                    </td>
                </tr>
                )
                }
            </tbody>
        </table>
    </div>
  )
}

export default CollegeList
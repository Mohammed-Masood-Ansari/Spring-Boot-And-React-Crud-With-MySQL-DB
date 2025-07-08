import React, { useState } from 'react'
import { registerCollege } from '../services/CollegeServices'
import { useNavigate } from 'react-router-dom'

const CollegeRegistration = () => {

    const [collegeId, setCollegeId]=useState('')
    const [collegeName, setCollegeName]=useState('')
    const [collegeAddress, setCollegeAddress]=useState('')
    const [collegePinCode, setCollegePinCode]=useState('')

    const navigator=useNavigate();

    const [errors, setErrors] = useState({
      collegeId:'',
      collegeName:'',
      collegeAddress:'',
      collegePinCode:''
    })

    function validateFrom(){
        let valid = true;
        //... it is a spread operator to copy object into another object 
        const errorsCopy = {...errors}

        if(collegeId.trim){
          errorsCopy.collegeId='';
        }else{
            errorsCopy.collegeId='college id is required....'; 
            valid=false;
        }

         if(collegeName.trim){
          errorsCopy.collegeName='';
        }else{
            errorsCopy.collegeName='college name is required....'; 
            valid=false;
        }

         if(collegeAddress.trim){
          errorsCopy.collegeAddress='';
        }else{
            errorsCopy.collegeAddress='college address is required....'; 
            valid=false;
        }

         if(collegePinCode.trim){
          errorsCopy.collegePinCode='';
        }else{
            errorsCopy.collegePinCode='college pin-code is required....'; 
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    //we can write function like this as well
    //const handleCollegeId = (e) => setCollegeId(e.target.value);


    // function handleCollegeId(id){
    //     setCollegeId(id.target.value);
    // }

    //  function handleCollegeName(name){
    //     setcollegeName(name.target.value);
    // }

    //  function handleCollegeAddress(address){
    //     setcollegeAddress(address.target.value);
    // }

    //  function handleCollegePinCode(pincode){
    //     setcollegePinCode(pincode.target.value);
    // }

    function saveCollege(e){
       e.preventDefault();

       if(validateFrom){
        const college={collegeId,collegeName,collegeAddress,collegePinCode}

        console.log(college);

        registerCollege(college).then((response)=>{
        console.log(response.data);

        navigator('/colleges')
       })
       }
      
    }

  return (
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             <h1 className='text-center'>WELCOME-TO-COLLEGE-REGISTRATION</h1>
             <div className='card-body'>
                <form>
                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEID:</label>
                           <input 
                           type='text'
                           placeholder='enter collegeid...'
                           name='collegeId'
                           value={collegeId}
                           className='form-control'
                           onChange={(e) => setCollegeId(e.target.value)}
                           />
                        </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGENAME:</label>
                           <input 
                           type='text'
                           placeholder='enter collegename...'
                           name='collegeName'
                           value={collegeName}
                           className='form-control'
                           onChange={(e) => setCollegeName(e.target.value)}
                           />
                       </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEADDRESS:</label>
                           <input 
                           type='text'
                           placeholder='enter college address...'
                           name='collegeAddress'
                           value={collegeAddress}
                           className='form-control'
                           onChange={(e) => setCollegeAddress(e.target.value)}
                           />
                       </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEPIN:</label>
                           <input 
                           type='text'
                           placeholder='enter college pin...'
                           name='collegePinCode'
                           value={collegePinCode}
                           className='form-control'
                           onChange={(e) => setCollegePinCode(e.target.value)}
                           />
                       </div>

                       <button className='btn btn-success' onClick={saveCollege}>SUBMIT</button>
                </form>
             </div>
            </div>
        </div>
    </div>
  )
}
export default CollegeRegistration
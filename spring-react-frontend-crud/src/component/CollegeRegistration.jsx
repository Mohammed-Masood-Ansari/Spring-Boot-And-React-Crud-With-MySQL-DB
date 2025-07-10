import React, { useEffect, useState } from 'react'
import { getCollegeById, registerCollege, updateCollegeById } from '../services/CollegeServices'
import { useNavigate, useParams } from 'react-router-dom'

const CollegeRegistration = () => {

    const [collegeId, setCollegeId]=useState('')
    const [collegeName, setCollegeName]=useState('')
    const [collegeAddress, setCollegeAddress]=useState('')
    const [collegePinCode, setCollegePinCode]=useState('')

    const navigator=useNavigate();

     const {id} = useParams();

    useEffect(()=>{

      if(id){
        getCollegeById(id).then((response)=>{
          setCollegeId(response.data.collegeId);
          setCollegeName(response.data.collegeName);
          setCollegeAddress(response.data.collegeAddress);
          setCollegePinCode(response.data.collegePinCode);
        }).catch(error=>{
          console.error(error);
        })
      }

    }, [id])

   
    
    const [errors, setErrors] = useState({
      collegeId:'',
      collegeName:'',
      collegeAddress:'',
      collegePinCode:''
    })

    
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

    function saveOrUpdateCollege(e){
       e.preventDefault();

       if(validateFrom()){
        const college={collegeId,collegeName,collegeAddress,collegePinCode}

        console.log(college);

        if(id){
           updateCollegeById(id,college).then((response)=>{
            console.log(response.data);
            navigator('/colleges')
           }).catch(error=>{
            console.error(error);
           })
        }else{
            registerCollege(college).then((response)=>{
            console.log(response.data);
            navigator('/colleges')
            }).catch(error=>{
              console.error(error);
            })
          }
      }
      
    }

    //

    function validateFrom(){
        let valid = true;
        //... it is a spread operator to copy object into another object 
        const errorsCopy = {...errors}

        if(String(collegeId).trim()){
          errorsCopy.collegeId='';
        }else{
            errorsCopy.collegeId='college id is required....'; 
            valid=false;
        }

         if(collegeName.trim()){
          errorsCopy.collegeName='';
        }else{
            errorsCopy.collegeName='college name is required....'; 
            valid=false;
        }

         if(collegeAddress.trim()){
          errorsCopy.collegeAddress='';
        }else{
            errorsCopy.collegeAddress='college address is required....'; 
            valid=false;
        }

         if(collegePinCode.trim()){
          errorsCopy.collegePinCode='';
        }else{
            errorsCopy.collegePinCode='college pin-code is required....'; 
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    //function created for edit college details
    function  pageTitle(){

      if(id){
        return  <h1 className='text-center'>WELCOME-TO-COLLEGE-UPDATE</h1>
      }else{
        return  <h1 className='text-center'>WELCOME-TO-COLLEGE-REGISTRATION</h1>
      }

    }

  return (
    <div className='container'>
        <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
             {/* //call dynamic UPDATE or REGISTRATION */}
             {
              pageTitle()
             }
             <div className='card-body'>
                <form>
                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEID:</label>
                           <input 
                           type='text'
                           placeholder='enter collegeid...'
                           name='collegeId'
                           value={collegeId}
                           className={`form-control ${errors.collegeId ? 'is-invalid':''}`}
                           onChange={(e) => setCollegeId(e.target.value)}
                           />
                           {errors.collegeId && <div className='invalid-feedback'>{errors.collegeId}</div>}
                        </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGENAME:</label>
                           <input 
                           type='text'
                           placeholder='enter collegename...'
                           name='collegeName'
                           value={collegeName}
                           className={`form-control ${errors.collegeName ? 'is-invalid':''}`}
                           onChange={(e) => setCollegeName(e.target.value)}
                           />
                            {errors.collegeName && <div className='invalid-feedback'>{errors.collegeName}</div>}
                       </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEADDRESS:</label>
                           <input 
                           type='text'
                           placeholder='enter college address...'
                           name='collegeAddress'
                           value={collegeAddress}
                             className={`form-control ${errors.collegeAddress ? 'is-invalid':''}`}
                           onChange={(e) => setCollegeAddress(e.target.value)}
                           />
                            {errors.collegeAddress && <div className='invalid-feedback'>{errors.collegeAddress}</div>}
                       </div>

                       <div className='form-group mb-2'>
                           <label className='form-label'>COLLEGEPIN:</label>
                           <input 
                           type='text'
                           placeholder='enter college pin...'
                           name='collegePinCode'
                           value={collegePinCode}
                           className={`form-control ${errors.collegePinCode ? 'is-invalid':''}`}
                           onChange={(e) => setCollegePinCode(e.target.value)}
                           />
                           {errors.collegePinCode && <div className='invalid-feedback'>{errors.collegePinCode}</div>}
                       </div>

                       <button className='btn btn-success' onClick={saveOrUpdateCollege}>SUBMIT</button>
                </form>
             </div>
            </div>
        </div>
    </div>
  )
}
export default CollegeRegistration
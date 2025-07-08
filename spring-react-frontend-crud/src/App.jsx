import { useState } from 'react'
import './App.css'
import CollegeList from './component/CollegeList'
import CollegeHeader from './component/collegeheader'
import CollegeFooter from './component/collegefooter'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CollegeRegistration from './component/CollegeRegistration'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <CollegeHeader/>
       <Routes>
         {/* // http://localhost:3000 */}
          <Route path='/' element={<CollegeList/>}></Route>

          {/* //http://localhost:3000/colleges */}
          <Route path='/colleges' element={<CollegeList/>}></Route>

           <Route path='/add-college' element={<CollegeRegistration/>}></Route>
       </Routes>
       <CollegeFooter/>
      </BrowserRouter>
    </>
  )
}

export default App

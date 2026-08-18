import React from 'react'
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router'
import ReadComponents from './ReadComponents';

const ReadPage = () => {
    const {no} = useParams();
    
  return (
    <div className='font-extrabold w-full bg-white mt-6'> 
        <div className='text-2xl'>
            Todo Read Page Component {no}
        </div>
        <ReadComponents no={no} />
    </div>
  )
}

export default ReadPage

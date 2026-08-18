import React from 'react'
import { useParams } from 'react-router'
import ModifyComponent from '../../components/todo/ModifyComponent';

const Modify = () => {
  const {no} = useParams();

  return (
    <div className='w-full bg-white p-4'>
      <div className='text-3xl font-extrabold'>
        Todo Modify Page Component
      </div>

      <ModifyComponent no={no} />
    </div>
  )
}

export default Modify

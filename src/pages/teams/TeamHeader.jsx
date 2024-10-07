import React from 'react'
import { Link } from 'react-router-dom'

const TeamHeader = () => {
  return (
    <div className='flex flex-wrap p-4 gap-8'>
      <Link to="./employee" className='border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150'>Employee</Link>
      <Link to="./department" className='border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150'>Department</Link>
      <Link to="./role" className='border border-white py-2 px-4 font-semibold rounded-md text-white hover:bg-white hover:text-black hover:rounded-full transition duration-200 delay-150'>Role</Link>
    </div>
  )
}

export default TeamHeader
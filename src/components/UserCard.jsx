
import React from 'react'

const UserCard = ({user}) => {
    console.log(user.imp_id);
    
    
  return (
    <div className='  flex  gap-4 mt-22 overflow-hidden '>
      
      <div className=' h-fit w-[300px] rounded-2xl shadow-lg  overflow-hidden  '>
        
      
        <div className='w-full h-50 overflow-hidden'>
          <img 
            className='w-full h-full object-cover'
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
            alt="user"
          />
        </div>

       
        <div className='p-4 flex flex-col  text-white'>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.designation}</p>
          <p>{user.imp_id}</p>

          <div className='flex justify-between items-center gap-5 mt-2'>
                    <button className='p-2 border  border-amber-500 text-yellow-500 w-[50%] rounded active:scale-95 cursor-pointer'>Remove</button>
                   <button className='p-2 border  border-rose-500 text-rose-500 w-[50%] rounded active:scale-95 cursor-pointer'>Update</button>
          </div>

        </div>




      </div>

       
      

    </div>
  )
}

export default UserCard
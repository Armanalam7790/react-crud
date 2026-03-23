import React from 'react'

const Navbar = ({settoggle, toggle}) => {
 
  
  return (
    <div className=' flex items-center justify-between px-10 h-[10%] border-b-2 bg-black fixed w-full '>
        <h2 className='text-2xl'>CRUD</h2>

        <div className='flex gap-10 items-center'>

            <p className=' font-bold cursor-pointer'>Home</p>
            <p  className=' font-bold cursor-pointer'>About</p>
            <p  className=' font-bold cursor-pointer'>Contect</p>
            
        </div>

        <button  onClick={() => settoggle((prev) => !prev)
       
        }
 className='px-4 py-2 bg-emerald-600 rounded active:scale-95 cursor-pointer'>{toggle? 'Show User' : "Add User"}</button>
    </div>
  )
}

export default Navbar
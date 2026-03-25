import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddUserForm = ({settoggle, setuser,editHandle,seteditHandle,user}) => {
  console.log(editHandle);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid },
  } = useForm({
    
    mode:"onChange",
    defaultValues: editHandle
  });

  
  
  
const submitHandler  = (data)=>{


if (editHandle) {
  


  setuser((prev)=> {
  let updateuser =  prev.map((val)=>{
      return val.id === editHandle.id ? {...val, ...data} : val
    })

    localStorage.setItem('user', JSON.stringify(updateuser))
    toast.success('User Updated')
    return updateuser

  })
  seteditHandle(null)
  
} else{
  // setuser(prev => [...prev , {...data, id:nanoid()}])
  let arr = [...user, {...data , id: nanoid()}]
  setuser(arr)
  toast.success('User Added')
  localStorage.setItem('user', JSON.stringify(arr))
}

settoggle(false)

reset()

}
  return (
    <div className="h-[90%] bg-gray-600 flex justify-center items-center ">


      <form 
      onSubmit={handleSubmit(submitHandler)}
      className="border px-10 py-5 w-[500px] flex flex-col gap-4 rounded border-emerald-500">


        <div>
          <input
          {...register('name', {required:'FullName is Required'})}
            className="border p-2 w-full rounded outline-0 "
            type="text"
            placeholder="name"
          />
          {errors.name && <p className="text-sm  text-rose-500">{errors.name.message}</p>}
        </div>


        <div>

          <input
          {...register('email', {required:'Email is Required', pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:'Enter valid Email'
          }})}

            className="border p-2 w-full rounded outline-0 "
            type="text"
            placeholder="email"
          />
          {errors.email && <p className="text-sm  text-rose-500">{errors.email.message}</p>}

        </div>

        <div>
          <input
          {...register('mobile', {required:'Mobile Number Required',
            
             minLength:{
            value : 10,
            message:"Min Digit 10"
          }, maxLength:{
             value : 10,
            message:"Max Digit 10"
          }
        })}

            className="border p-2 w-full rounded outline-0 "
            type="tel"
            placeholder="mobile"
          />
          {errors.mobile && <p className="text-sm  text-rose-500">{errors.mobile.message}</p>}

        </div>

        <div>
          <input
          {...register('designation', {required:"designation required"})}

            className="border p-2 w-full rounded outline-0 "
            type="text"
            placeholder="designation"
          />
          {errors.desination && <p className="text-sm  text-rose-500">{errors.desination.message}</p>}

        </div>

        <div>
          <input
          {...register('imp_id', {required:'Emplooye Required'})}

            className="border p-2 w-full rounded outline-0 "
            type="text"
            placeholder="emp_id"
          />
                    {errors.imp_id && <p className="text-sm  text-rose-500">{errors.imp_id.message}</p>}

        </div>

        <div className="flex items-center gap-10">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
          {...register('role')}
            
            type="radio" name="role" value="manager" />
            <p>Manager</p>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input 
          {...register('role',{required:"employee required"})}
            
            type="radio" name="role" value="employee" />
            <p>Employee</p>
          </label>
                    {errors.role && <p className="text-sm  text-rose-500">{errors.role.message}</p>}

        </div>

        <button disabled={!isValid} className={` ${!isValid ? "bg-gray-500 cursor-text" : "bg-blue-600"} rounded text-2xl cursor-pointer  py-2`}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;

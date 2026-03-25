import React from "react";
import Navbar from "./components/Navbar";
import AddUserForm from "./components/AddUserForm";
import { useState } from "react";
import UserCard from "./components/UserCard";
import { toast } from "react-toastify";

const App = () => {
  const [toggle, settoggle] = useState(false);

  

  const [user, setuser] = useState(
  JSON.parse(localStorage.getItem('user')) || []
);
  const [editHandle, seteditHandle] = useState(null);



  let HandleDelete = (id) => {
    console.log(id);
    const res = user.filter((elem) => elem.id !== id);
    setuser(res);
    toast.error('User Delete')
    localStorage.setItem('user', JSON.stringify(res))
  };

  // console.log('users ', user);

  return (

    <div className="h-screen bg-black/99 text-white overflow-auto ">
      <Navbar settoggle={settoggle} toggle={toggle} />

      {toggle ? (
        <AddUserForm
          settoggle={settoggle}
          setuser={setuser}
          editHandle={editHandle}
          seteditHandle={seteditHandle}
          user={user}
        />
      ) : (
        <div className="flex justify-center gap-6 flex-wrap">
          {user.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                HandleDelete={HandleDelete}
                seteditHandle={seteditHandle}
               settoggle={settoggle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import AddUserForm from "./components/AddUserForm";
import { useState } from "react";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, settoggle] = useState(false);

  const [user, setuser] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      designation: "Frontend Developer",
      imp_id: "EMP101",
      img: "https://images.unsplash.com/photo-1773053525998-8cb667020fa7?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           mobile:6209923553,
           role:'manager'
    },
    {
      id: 2,
      name: "Aman Khan",
      email: "aman@gmail.com",
      designation: "Backend Developer",
      imp_id: "EMP102",
      img: "https://images.unsplash.com/photo-1773053525998-8cb667020fa7?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobile:6209923553,
        role:'manager'
    },
    {
      id: 3,
      name: "Priya Singh",
      email: "priya@gmail.com",
      designation: "UI/UX Designer",
      imp_id: "EMP103",
      img: "https://images.unsplash.com/photo-1773053525998-8cb667020fa7?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           mobile:6209923553,
             role:'manager'
    },
  ]);
  const [editHandle, seteditHandle] = useState(null);



  let HandleDelete = (id) => {
    console.log(id);
    const res = user.filter((elem) => elem.id !== id);
    setuser(res);
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

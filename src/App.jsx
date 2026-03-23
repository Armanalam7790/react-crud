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
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    id: 2,
    name: "Aman Khan",
    email: "aman@gmail.com",
    designation: "Backend Developer",
    imp_id: "EMP102",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    designation: "UI/UX Designer",
    imp_id: "EMP103",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  }
]);

  console.log('users ', user);

  return (
    
    // <div className="w-screen h-screen  bg-black text-white overflow-hidden">
    <div className="h-screen bg-black/99 text-white overflow-auto ">
      <Navbar settoggle={settoggle} toggle={toggle} />

   
     
     
     
      {toggle ?
        <AddUserForm settoggle={settoggle} setuser={setuser} />
        :
        <div className="flex justify-center gap-6 flex-wrap">
          {
          user.map(((elem) => {
            return <UserCard key={elem.id} user={elem} />
          }))
        }
        </div>
      }
    </div>
  );
};

export default App;

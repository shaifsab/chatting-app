import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Friend = () => {
  // state 
  const [users, setUsers] = useState([]);


  // firebase 
  const db = getDatabase();

  // realme database 
  useEffect(() => {
    const starCountRef = ref(db, 'users');
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setUsers(arr);
    });
  }, [db]);

  return (
    <>
    <div className="friend mt-[55px] flex flex-col items-center gap-4 ml-[350px] w-[400px] h-[500px] bg-[#077eff] rounded-lg shadow-2xl ">
      <p className="font-semibold text-white text-[20px] mt-4">All user</p>
      {/* mapping  */}
      {
        users.map((item, index) =>(
          <div key={index} className="friend-req bg-[#ffffff] rounded-lg w-[360px] h-[80px]  flex items-center relative shadow-2xl">
          <img
                    className="w-[50px] h-[50px] rounded-full border-2 border-gray-500 absolute left-4"
                    src={item.userPhoto}
                    alt="image"
                  />
    
          <p className="font-semibold text-[#001030] text-[15px] absolute left-[80px]">{item.userName}</p>
    
          <button className="font-semibold text-white rounded-lg  text-[15px] py-2 px-5 bg-[#001030] absolute right-5 hover:bg-[#077eff]">Add</button>
          </div>
        ))
      }

    </div>
      
    </>
  )
}

export default Friend

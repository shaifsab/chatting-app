import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove, set, push} from "firebase/database";
import { useSelector } from "react-redux";


const Friend = () => {

  // State
  const [friendRequest, setFriendRequest] = useState([])

  // Redux
  const sliceUser = useSelector((state) => state.counter.userData);

  // Firebase
  const db = getDatabase();

  // Firebase database
  useEffect(()=>{
    const starCountRef = ref(db, 'friendRequest/');
    onValue(starCountRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=> {
        arr.push({...item.val() , key:item.key})
      })
      setFriendRequest(arr)
    }), 
    (error) => {
      console.error("Error fetching data: ", error);
    }
  },[])

  // Confirm button
  const handleConfirm = (data) =>{
    // add data to the friend list
     const db = getDatabase();
     set(push(ref(db, 'friends/')), {
      currentUserId: sliceUser.uid,
      currentUserName: sliceUser.displayName,
      currentUserPhoto: sliceUser.photoURL,
      friendId: data.senderId,
      friendName: data.senderName,
      friendPhoto: data.senderPhoto,
     });

     console.log('click hoise')
 
   // remove data from the friend request
   remove(ref(db, 'friendRequest/' + data.key));
 }


  return (
    <>
    <div className="friend mt-[55px] flex flex-col items-center gap-4 ml-[350px] w-[400px] h-[500px] bg-[#077eff] rounded-lg shadow-2xl ">
      <p className="font-semibold text-white text-[20px] mt-4">Friend Request</p>
      {/* mapping  */}
      {
        friendRequest.map((item)=>(
          <div key={item.key} className="friend-req bg-[#ffffff] rounded-lg w-[360px] h-[80px]  flex items-center relative shadow-2xl">
          <img
                    className="w-[50px] h-[50px] rounded-full border-2 border-gray-500 absolute left-4"
                    src={item.senderPhoto}
                    alt="image"
                  />
    
          <p className="font-semibold text-[#001030] text-[15px] absolute left-[80px]">{item.senderName}</p>

          <div className="button flex gap-3 items-center absolute right-3">
            <button onClick={()=>handleConfirm(item)} className="font-semibold text-white rounded-[15px]  text-[12px] py-1 px-2 bg-red-600 hover:bg-[#077eff]">Confirm</button>
            <button  className="font-semibold text-white rounded-[15px]  text-[12px] py-1 px-2 bg-red-600 hover:bg-[#077eff]">Remove</button>
          </div>

          </div>
        ))
      }
    </div>
      
    </>
  )
}

export default Friend

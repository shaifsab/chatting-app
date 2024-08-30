import React from 'react'
import '../../Components/Home/Home.css'
import { useSelector } from "react-redux";

const Home = () => {
    const currentUserData = useSelector((state) => state.counter.userData);

  return (
    <>
      <div className='home-page'>
        <div className="container">
            <div className="main relative">

                {/* top background */}
                <div className="w-[1100px] h-[150px] top-0 absolute rounded-t-[15px] bg-[rgba(52,38,82,0.23)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.1px]"></div>

                <div className="w-[1100px] absolute bottom-0  h-[400px] bg-white rounded-b-[15px]">
                    {/* profile picture  */}
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-gray-500 rounded-full overflow-hidden">
                        <img
                            className="object-cover object-center h-32"
                            src={currentUserData?.photoURL}
                            alt="Image"
                        />
                    </div>

                    {/* text  */}
                    <div className="text-center mt-[30px]">
                        <h2 className="font-semibold text-[25px]">{currentUserData?.displayName}</h2>
                        <p className="text-gray-500 text-[20px] mt-[10px]">{currentUserData?.email}</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Home

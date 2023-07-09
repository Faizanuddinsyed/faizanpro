import React from 'react'

function Facilities() {
  return (
    <div className=' justify-center items-center m-5 flex flex-col  md:mt-16 mt-[100px]'>
        <div>
            <h1 className=' md:mb-8 mb-3 text-center font-bison font-bold leading-[42px] md:text-[60px] text-[42px]'>FACILITIES AND OFFERINGS</h1>
            <p className=' md:w-[1200px] text-center font-poppins font-400 text-[18px] mb-5'>Spanning over 54,680 square feet, the Heartfulness International Sports Center offers state-of-the-art infrastructure to cater to various sports enthusiasts.
                 Our facilities include: 14 badminton courts, 3 squash courts, 25-meter swimming pool & Gym and Fitness center</p>
        </div>
        <div className=' flex flex-row md:m-16 md:ml-42 ml-2 flex-wrap '>
       <div className='md:w-[245px]  w-[153px] h-[263px]  md:h-[400px] bg-green-500 rounded-[16px] justify-center '>

       </div>
       <div className='md:w-[245px] w-[153px] h-[263px] md:ml-16 ml-8 md:mt-48 md:h-[400px] bg-black rounded-[16px] justify-center'>

       </div>

       <div className='md:w-[245px] w-[153px] h-[263px] md:ml-16 md:h-[400px] mt-5 bg-blue-500 rounded-[16px] justify-center'>

        </div>

        <div className='md:w-[245px] w-[153px] h-[263px] ml-8 md:ml-16 md:mt-48 mt-5 md:h-[400px] bg-orange-600 rounded-[16px] justify-center'>

        </div>

       
       </div>

       <div className='md:w-[1970px] md:h-[430px] w-[350px] h-[490px] md:mt-0 mt-10 flex flex-col items-center justify-center md:bg-blue-500 bg-orange-500  '>

        <h1 className='md:w-[525px] md:h-[72px] w-[262px] text-center font-bison md:text-[60px] text-[30px] md:mb-8 mb-4 font-semibold text-white'>JOIN US AT HISC</h1>
        <p className='md:w-[1234px] md:h-[78px] w-[315px] text-white text-center font-poppins'>Be a part of the Heartfulness International Sports Center community, where sports and holistic well-being merge. Explore our facilities, experience the joy of sports, and unlock your potential. Let's nurture future champions and empower youth through the transformative power of sports. Contact us today or visit our facility. We look forward to welcoming you to HISC!</p>
        <button className='w-[175px] h-[52px] text-black bg-white mt-6 rounded-3xl font-roboto font-500 text-[13.85px]'>SIGN UP NOW</button>

       </div>
    
    
    </div>
 
  )
}

export default Facilities
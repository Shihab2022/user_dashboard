import React from 'react';

const Profile = () => {
    return (
        <>
         <div className='relative'>
           <div className='bg-green-200 h-28 rounded-t-lg flex justify-center relative items-end w-full'>

           </div>
           <img src="https://randomuser.me/api/portraits/men/61.jpg" className='h-24 w-24 absolute bottom-[-50px] left-[40%]  mt-64 rounded-full border-4 border-white ' alt="" />
       
        </div>
        <div className='mt-14'>
          <h1 className='text-xl font-bold text-center'>Richards Cooper</h1>
           <h1 className='text-lg text-zinc-400  text-center'>Product Designer</h1>
          </div>
          <div className='flex justify-evenly my-5'>
            <div>
                <h1 className='text-xl font-bold'>1,269</h1>
                <h1 className='text-sm text-zinc-400'>Products</h1>
            </div>
            <div>
                <h1 className='text-xl font-bold'>6.14k</h1>
                <h1 className='text-sm text-zinc-400'>Followers</h1>
            </div>
          </div>
          <hr class="my-8 h-px bg-gray-500 border-0 dark:bg-gray-500"></hr>
        </>
       
    );
};

export default Profile;
import React from 'react';

const Activity = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold'>Recent Activity</h1>
            <div className='flex items-center mt-3'>
                <div className='bg-zinc-200 text-lg font-semibold px-3 py-1  rounded-lg'>
                    <h1 className='text-center'>12</h1>
                    <h2>Sep</h2>
                </div>
                <h1 className='text-sm font-semibold ml-5 text-zinc-400'>Responded to need "Volunteer Activities"</h1>
            </div>
            <div className='flex items-center mt-3'>
                <div className='bg-zinc-200 text-lg font-semibold px-3 py-1  rounded-lg'>
                    <h1 className='text-center'>11</h1>
                    <h2>Sep</h2>
                </div>
                <h1 className='text-sm font-semibold ml-5 text-zinc-400'>Everyone realize would be describe ...</h1>
            </div>
            <div className='flex items-center mt-3'>
                <div className='bg-zinc-200 text-lg font-semibold px-3 py-1  rounded-lg'>
                    <h1 className='text-center'>10</h1>
                    <h2>Sep</h2>
                </div>
                <h1 className='text-sm font-semibold ml-5 text-zinc-400'>Join The group "Boardsmanship"</h1>
            </div>
        </div>
    );
};

export default Activity;
import React from 'react';

const TopProduct = () => {
    return (
        <div>
            <div className='flex justify-between'>
            <h1 className='text-xl font-semibold'>Top Product</h1>
            <h1>Monthly </h1>

            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex '>
                    <p className='text-2xl px-3 py-2 bg-sky-500 rounded-xl shadow-md font-bold text-white'>#1</p>
                   <div className='ml-3'>
                   <h1 className='text-lg text-zinc-500'>Polo Blue T-Shirt</h1>
                   <h1 className='text-xl font-semibold'>$25.4</h1>
                   </div>
                </div>
                <p className='text-sm px-4 py-1 rounded-lg bg-stone-300'>3.82k</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex '>
                    <p className='text-2xl px-3 py-2 bg-sky-500 rounded-xl shadow-md font-bold text-white'>#2</p>
                   <div className='ml-3'>
                   <h1 className='text-lg text-zinc-500'>Hoodie For Man</h1>
                   <h1 className='text-xl font-semibold'>$23.02</h1>
                   </div>
                </div>
                <p className='text-sm px-4 py-1 rounded-lg bg-stone-300'>2.62k</p>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='flex '>
                    <p className='text-2xl px-3 py-2 bg-sky-500 rounded-xl shadow-md font-bold text-white'>#3</p>
                   <div className='ml-3'>
                   <h1 className='text-lg text-zinc-500'>Red Color Cap</h1>
                   <h1 className='text-xl font-semibold'>$22.5</h1>
                   </div>
                </div>
                <p className='text-sm px-4 py-1 rounded-lg bg-stone-300'>1.22k</p>
            </div>
        </div>
    );
};

export default TopProduct;
import React from 'react';
import Main from './Main';

const Dashboard = () => {
    return (
        <div className="min-h-full">
            
            <header className="">
          <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 flex justify-between lg:px-8">
     <div>
     <h1 className="text-3xl font-bold tracking-tight text-gray-900">Users</h1>
     <p className='text-zinc-500 font-semibold ml-2'>37 users</p>
     </div>
            <button className='bg-gradient-to-r from-cyan-500 to-amber-500 px-3 py-1 h-12 text-lg text-white rounded-md'> <span className='text-xl '> + </span> Invite </button>
          </div>
        </header>
        <form className='max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 mt-5'>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User Here ...." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-500 to-amber-500">Search</button>
    </div>
</form>
  <Main/>
      </div>
    );
};

export default Dashboard;
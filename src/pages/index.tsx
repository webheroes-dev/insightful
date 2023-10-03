import React from 'react'

export default function Home() {
    return (
      <main className='h-screen flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-7xl font-medium'>We're <span className='font-semibold text-green-500'>Web Heroes</span></h1>
            <p className='text-4xl mt-3 mb-1'>See you soon</p>
            <p className='font-normal'>or just jump into our <a href="/articles">articles</a> in the meantime</p>
        </div>
      </main>
  );
}

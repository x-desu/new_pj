import { useState } from 'react'
import Menu from './components/Menu'
import Model from './components/Model'
function App() {

  return (
    <>
    <div className='flex w-screen h-screen '>
    <Menu Style='w-1/4 flex justify-start p-5 flex-col gap-y-4'/>
      <Model Style='grow  bg-black text-white flex  items-center justify-center'/>
    </div>
    </>
  )
}

export default App

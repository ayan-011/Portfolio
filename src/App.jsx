 
import './App.css'
import LeftSidebar from './leftSidebar'
import Home from './Middle/Home'

function App() { 

  return (
     <>
     <div className='w-full h-screen  bg-black '>
     
     <div className='bg- -800 border border-l-0 border-t-0 border-b-0  border-zinc-900 w-1/4 md:flex hidden p-2 h-screen '> 
       <LeftSidebar/>
     </div>
     <div>
      <Home/>
     </div>
     <div></div>

     </div>
     
     </>
  )
}

export default App

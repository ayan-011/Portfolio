 
import {  Route, Routes } from "react-router-dom"; 
import Dashboard from './dashboard';  
 
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
         {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
        
        </div>
  )
}

export default App

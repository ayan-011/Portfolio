import React from 'react' 
import {  Route, Routes } from "react-router-dom";
import { useRoutes } from 'react-router-dom';
import Dashboard from './dashboard';

export const App = () => {
  return (
    <div>

    <Routes>
				<Route
					path='/'
					element={
						<Dashboard />
					}
				/>

    </Routes>
        
        </div>
  )
}

export default App

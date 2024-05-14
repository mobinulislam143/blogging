import React from 'react'
import HomePage from './Pages/HomePage.jsx'
import ByCategoryPages from './Pages/ByCategoryPages.jsx'
import DetailsPages from './Pages/DetailsPages.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <> 
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route exact path="/byCategory/:categoryID" element={<ByCategoryPages/>}/>
                <Route path="/details/:postID" element={<DetailsPages/>}/>
            </Routes>
        </BrowserRouter>
    </>
     );
};
export default App;

import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CategoryPage,ErrorPage,HomePage,MealDetailPage } from './pages/index';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<HomePage />} /> 
      <Route path='/meal/:id' element={<MealDetailPage />} />
      <Route path='/meal/category/:name' element={<CategoryPage/>}/>
      <Route path='*' element={<ErrorPage />} />
      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

import styled from 'styled-components';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Home from './Components/Home';
import List from './Components/List';
import Product from './Components/Product';

import {  Routes,Route } from "react-router-dom";



const Test = styled.div`
  width:100wh;
  height:100vh;
  background-color:red;
`


function App() {
  return (
    <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/product" element={<Product />} />
        <Route path='*' element={<p> Page Not Found </p>}/>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Short_by from './components/Short_by';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third'
// import Animation from './components/Animation';

function App() {
  return (

    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Short_By" element={<Short_by />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
       {/* <Animation/> */}

       <First />
      <Second/>
       <Third/>

    </div>
  );
}

export default App;

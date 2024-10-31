import Navbar from "./Component/Navbar";
import Slider from "./Component/Slider";
import About from "./Component/About";
import Details from './Component/Details';
import ProductList from "./Component/ProductList";
import {Routes , Route} from 'react-router-dom';
function App() {
  return (
     <div className="App">
       <Navbar />
       <Routes>
         
           <Route path="/" element = { 
              <>
                 <Slider /> 
                 <ProductList /> 
              </>
           } />

           <Route path="/about" element={<About />} />
           {/* <Route path="/details/:productId" element={<Details />} /> */}

       </Routes>
     </div>
  );
}

export default App;

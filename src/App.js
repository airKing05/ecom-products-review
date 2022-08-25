import './App.css';
import Header from './components/Header';
import  Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart';
import Review from './components/Review/Review';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/review/:productId' element={<Review/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;

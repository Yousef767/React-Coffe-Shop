import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.css'
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Top from './components/Top';
import Location from './components/Location';
import Gifts from './components/Gifts';
import HotChocolate from './components/HotChocolate';
import { Login,SignUp} from './components/Account';
import IceTea from './components/IceTea';
import Brewed from './components/Brewed';
import Espresso from './components/Espresso';
import Cup from './components/Cup';
import Cart from './components/Cart';


function App() {
  return (
    <div className="app">
      <Welcome />
      <BrowserRouter>
        <Slider />
        <Nav />
        <Routes>
          <Route index path='/' element={<Top/>}></Route>
          <Route path='location' element={<Location/>}></Route>
          <Route path='gifts' element={<Gifts/>}></Route>
          <Route path='cup' element={<Cup />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<SignUp />}></Route>
          <Route path='hotcho' element={<HotChocolate />}></Route>
          <Route path='icetea' element={<IceTea/>}></Route>
          <Route path='brewed' element={<Brewed />}></Route>
          <Route path='espresso' element={<Espresso/>}></Route>
        </Routes>
      </BrowserRouter>
      <Cart/>
    </div>
  );
}

export default App;

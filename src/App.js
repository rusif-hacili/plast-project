import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './page/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <div>
       <div className='navbar'><Header /></div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

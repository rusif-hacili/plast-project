import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './page/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;

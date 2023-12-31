import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import './reset.css'
import "@fontsource/archivo";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home/Home';
import Buy from './page/Buy/Buy';
import Product from './page/Product/Product';
import Devices from './page/Devices/Devices';
import About from './page/About/About';
import Connection from './page/Connection/Connection';
import Search from './page/Search/Search';
import "./i18n";
// import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Home show={"home"}/>,
        index: true
      },

      {
        path: '/buy',
        element: <Buy show={"buy"} />
      },

      {
        path: '/product',
        element: <Product show={"product"}/>
      },

      {
        path: '/devices',
        element: <Devices show={"devices"}/>
      },

      {
        path: '/about',
        element: <About show={"about"} />
      },

      {
        path: '/connection',
        element: <Connection show={"connection"} />
      },

      {
        path: '/search',
        element: <Search show={"search"}/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

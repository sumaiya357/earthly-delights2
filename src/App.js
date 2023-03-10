
import './App.css';
import router from './Routes/Routes/Routes';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    // border border-solid border-2
    <div className='max-w-[1440px] mx-auto  '>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
   
  );
}

export default App;


import './App.css';
import router from './Routes/Routes/Routes';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
   
    <div className='max-w-[1440px] mx-auto border border-solid border-2 '>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
   
  );
}

export default App;


import './App.css';
import router from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto border border-solid border-2 '>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

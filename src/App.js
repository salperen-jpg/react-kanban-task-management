import { Dashboard, Landing, SharedLayout, About, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='dashboard' element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;

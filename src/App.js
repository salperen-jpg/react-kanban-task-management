import { Dashboard, Landing, SharedLayout, About, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/dashboard' element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

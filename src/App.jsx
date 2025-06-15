import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<h1 className="text-xl">Home Page</h1>} />
        <Route path="/about" element={<h1 className="text-xl">About Page</h1>} />
        <Route path="/blog" element={<h1 className="text-xl">Blog Page</h1>} />
        <Route path="/cart" element={<h1 className="text-xl">Cart Page</h1>} />
        <Route path="*" element={<h1 className="text-xl text-red-600">404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
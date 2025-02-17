import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { landingRoutes } from './routes';
import {  Loader2 } from 'lucide-react'; // Add this import

const router = createBrowserRouter(landingRoutes);

function App() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader2 size={64} /> {/* Adjust the size as needed */}
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

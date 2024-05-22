import './App.css';
import SampleFrom from './SampleForm';
import { FormProvider } from './context/FormContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ValidationsPage from './pages/validations-page';
import ApiCalls from './pages/api-calls';
import HomePage from './pages/home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/validations',
    element: <ValidationsPage />,
  },
  {
    path: '/api-calls',
    element: <ApiCalls />,
  },
]); //Created a path for our individual routes
const App = () => {
  return (
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  );
};

export default App;

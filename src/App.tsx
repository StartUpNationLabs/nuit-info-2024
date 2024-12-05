import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

import { Header } from './Header';
import { HumanEarth } from './HumanEarth';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<HumanEarth />} />
      </Route>
    )
  );

export function App() {

    return (
      <>
        <RouterProvider router={router}/>
      </>
    );
  }

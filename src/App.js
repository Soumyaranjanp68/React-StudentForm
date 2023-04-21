import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MyForm from "./MyForm"
import Details from "./Details";
import "./App.css";

const router=createBrowserRouter([
  {
    path: '/',
    element : <MyForm/>
  },
  {
    path: '/show',
    element : <Details/>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router} ></RouterProvider>
    </main>
  );
}

export default App;
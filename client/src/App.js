
import './App.css';
import {RouterProvider, createBrowserRouter,Router , Route} from "react-router-dom";
import User from "./components/user.jsx";
import Add from "./components/addUser.jsx";
function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,
    },
    {
      path:"/edit",
      element:"User Update Page",
    },
    {
      path:"/delete",
      element:"User Delete Page",
    }

  ]); 

  return (
    <div className="App">
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;

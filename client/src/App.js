
import './App.css';
import {RouterProvider, createBrowserRouter,Router , Route} from "react-router-dom";
import User from "./components/user.jsx";
import Add from "./components/addUser.jsx";
import DerivedState from './components/DerivedState.jsx';
import Layout from './components/Layout.jsx';

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
    },
    {
      path:"/derived-state",
      element:<DerivedState/>,
    }

  ]); 

  return (
    <div className="App">
      <Layout />
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;

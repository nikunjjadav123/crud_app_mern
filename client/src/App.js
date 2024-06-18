
import './App.css';
import {RouterProvider, createBrowserRouter,Router , Route} from "react-router-dom";
import User from "./components/user.jsx";
import Add from "./components/addUser.jsx";
import EventHandling from './components/EventHandling.jsx';
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
      path:"/event-handling",
      element:<EventHandling/>,
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

import { createBrowserRouter} from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookList from "../Pages/BookList/BookList";
import PagesToRead from "../Pages/BookList/PagesToRead/PagesToRead";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch('data.json')
         },
         {
            path: "/bookList",
            element: <BookList></BookList>,
         },
         {
            path: "/pagesToRead",
            element: <PagesToRead></PagesToRead> ,
         },
         // {
         //    path: '/',
         //    element: <Home></Home>
         // },
         // {
         //    path: '/',
         //    element: <Home></Home>
         // },
      ],
   },
]);

export default router;

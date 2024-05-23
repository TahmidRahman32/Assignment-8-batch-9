import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookList from "../Pages/BookList/BookList";
import PagesToRead from "../Pages/BookList/PagesToRead/PagesToRead";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("/data.json"),
         },

         {
            path: "/pagesToRead",
            element: <PagesToRead></PagesToRead>,
            loader: () => fetch(`/data.json`),
         },
         {
            path: "/book/:id",
            element: <BookList></BookList>,
            loader: () => fetch(`/data.json`),
         },
         {
            path: "/add",
            element: <ListedBooks></ListedBooks>,
            loader: () => fetch("/data.json"),
         },
      ],
   },
]);

export default router;

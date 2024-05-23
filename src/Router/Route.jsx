import { createBrowserRouter} from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookList from "../Pages/BookList/BookList";
import PagesToRead from "../Pages/BookList/PagesToRead/PagesToRead";
import Chart from "../Pages/Chart/Chart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("data.json"),
         },
         {
            path: "/bookList",
            element: <BookList></BookList>,
         },
         {
            path: "/pagesToRead",
            element: <PagesToRead></PagesToRead>,
         },
         {
            path: "/book/:id",
            element: <BookList></BookList>,
            loader: () => fetch(`data.json`),
         },
         {
            path: "/chart",
            element: <Chart></Chart>,
            loader: () => fetch(`data.json`),
         },
      ],
   },
]);

export default router;

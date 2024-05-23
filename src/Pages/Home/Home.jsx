import { useLoaderData } from "react-router-dom";

import Banner from "./Banner";
import Book from "./Book";

const Home = () => {
   const dataLoad = useLoaderData();

   return (
      <div>
         <Banner></Banner>
         <div className="grid grid-cols-3 gap-5">
            {dataLoad.map((book) => (
               <Book key={book.bookId} book={book}></Book>
            ))}
         </div>
      </div>
   );
};

export default Home;

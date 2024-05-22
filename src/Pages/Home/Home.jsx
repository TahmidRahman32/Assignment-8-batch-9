import { useLoaderData } from "react-router-dom";
import Nav from "../../Sheard/Nav";
import Banner from "./Banner";
import Book from "./Book";


const Home = () => {
   const dataLoad = useLoaderData();
   
   return (
      <div>
         <Nav></Nav>
         <Banner></Banner>
         <div className="grid grid-cols-3 gap-5">
            {dataLoad.map((book) => (
               <Book key={book.id} book={book}></Book>
            ))}
         </div>
      </div>
   );
};

export default Home;
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStorageCard } from "../../Utils/storage";
import ListCard from "./ListCard";
import toast from "react-hot-toast";

const ListedBooks = () => {
   const list = useLoaderData();
   console.log(list);
   const [bookCard, setBookCard] = useState([]);
   console.log(bookCard);

   useEffect(() => {
      const storedBookId = getStorageCard();
      if (list.length > 0) {
         const storedBook = list.filter((book) => storedBookId.includes(book.bookId));
         setBookCard(storedBook);
      } else {
         return toast.error("This is an error!");
      }
   }, [list]);
   return (
      <div>
         <h2 className="text-center text-3xl font-bold my-8 bg-gray-200 py-2 rounded-lg">Books</h2>
         <div className="flex justify-center">
            <details className="dropdown">
               <summary className="m-1 btn bg-color">
                  Sort By <IoMdArrowDropdown />
               </summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                     <a>Item 1</a>
                  </li>
                  <li>
                     <a>Item 2</a>
                  </li>
               </ul>
            </details>
         </div>
         <div className="space-y-4">
            {bookCard.map((card) => (
               <ListCard key={card.bookId} card={card}></ListCard>
            ))}
         </div>
      </div>
   );
};

export default ListedBooks;

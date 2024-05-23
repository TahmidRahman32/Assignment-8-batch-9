import { FaStar } from "react-icons/fa6";
import { Link} from "react-router-dom";

const Book = ({ book }) => {
   const { image, rating, bookName, category, publisher, tags, bookId } = book;
  

   return (
      <Link to={`/book/${bookId}`}>
         <div className="card card-compact py-8 bg-base-100 shadow-xl">
            <figure>
               <img className="w-72 h-80 rounded-xl" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
               <div className="flex gap-2">
                  <span className="px-3 text-color font-bold bg-gray-100 py-1 rounded-lg">{tags[0]}</span>
                  <span className="px-3 text-color font-bold bg-gray-100 py-1 rounded-lg">{tags[1]}</span>
               </div>
               <h2 className="card-title">{bookName.slice(0, 25)}</h2>
               <p>
                  <span className="font-bold">By:</span> {publisher}
               </p>
               <hr />
               <div className="card-actions ">
                  <p className="font-bold">{category}</p>
                  <div className="flex items-center gap-2">
                     <p className="font-bold">{rating}</p>
                     <p className="text-amber-500">
                        <FaStar size={20} />
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default Book;

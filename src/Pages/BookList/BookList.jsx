import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";
import { saveCardStore } from "../../Utils/storage";

const BookList = () => {
   const cards = useLoaderData();
   const { id } = useParams();
   // const parsInt = parseInt(id)
   const card = cards.find((card) => card.bookId === id);
   // console.log(id, card);
   const { image, rating, totalPages, yearOfPublishing, bookName, category, publisher, tags, review, bookId } = card;

   const handleReadBtn = ()=>{
      const isCard = cards.find( card=> card.bookId === id);
      console.log(isCard);
      if(isCard){
       saveCardStore(bookId);
      toast.success("Successfully created!");  
      }
      else{
         toast.error("This is an error!");
      }

      
   }
   return (
      <div>
         <div className="card card-side bg-base-100 shadow-xl flex items-center">
            <img className="bg-gray-200 w-96 rounded-xl" src={image} alt="Movie" />

            <div className="card-body">
               <h2 className="card-title">{bookName}</h2>
               <p>
                  <span className="font-bold">By:</span> {publisher}
               </p>

               <div className="grid grid-cols-1 divide-y ">
                  <div className="my-3"></div>
                  <p className="font-bold py-2">{category}</p>

                  <p className="">
                     <span className="font-bold ">Review:</span> {review}
                  </p>
               </div>
               <div className="card-actions ">
                  <div className="flex gap-2 my-5">
                     <p className="font-bold">Tag:</p>
                     <span className="px-3 text-color font-bold bg-gray-100 py-1 rounded-lg">{tags[0]}</span>
                     <span className="px-3 text-color font-bold bg-gray-100 py-1 rounded-lg">{tags[1]}</span>
                     <span className="px-3 text-color font-bold bg-gray-100 py-1 rounded-lg">{tags[2]}</span>
                  </div>
               </div>
               <div className="grid grid-cols-4 ">
                  <p className="grid ">
                     <span> Number of Pages:</span>
                     <span>Publisher:</span>
                     <span> Year of Publishing:</span>
                     <span>Rating:</span>
                  </p>
                  <p className="grid ">
                     <span className="font-bold mr-6">{totalPages}</span>
                     <span className="font-bold mr-6">{publisher}</span>
                     <span className="font-bold mr-6">{yearOfPublishing}</span>
                     <span className="font-bold mr-6">{rating}</span>
                  </p>
               </div>
               <div className="flex gap-5">
                  <button onClick={handleReadBtn} className="btn bg-color text-white">Read</button>
                  <button className="btn btn-success text-white">Wishlist</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookList;

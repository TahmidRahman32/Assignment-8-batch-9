import { MdOutlinePlace } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { TbPageBreak } from "react-icons/tb";
const ListCard = ({ card }) => {
   console.log(card);
   const { tags, image, category, totalPages, rating, bookName, author } = card;
   return (
      <div className="">
         <div className="card card-side bg-base-100 shadow-xl px-16">
            <figure>
               <img className="w-36 rounded-lg" src={image} alt="Movie" />
            </figure>
            <div className="card-body ml-12">
               <h2 className="card-title">{bookName}</h2>
               <p className="font-bold">By: {author}</p>
               <div className="flex gap-10">
                  <span className="btn bg-color">{tags[0]}</span>
                  <span className="btn bg-color">{tags[1]}</span>
                  <span className="flex items-center gap-1">
                     <MdOutlinePlace size={20} />
                     Year of Publishing: 1924
                  </span>
               </div>
               <div className="flex gap-14">
                  <span className="flex items-center gap-1">
                     <FaUserFriends /> Publisher: Scribner
                  </span>
                  <span className="flex items-center gap-1">
                     <TbPageBreak /> {totalPages}
                  </span>
               </div>
               <hr />
               <div className="card-actions gap-8">
                  <button className="btn ">Category: {category}</button>
                  <button className="btn">Rating:{rating}</button>
                  <button className="btn bg-color">View Details</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ListCard;

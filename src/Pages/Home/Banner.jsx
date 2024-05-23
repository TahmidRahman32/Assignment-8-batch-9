import { Link } from 'react-router-dom';
import logo from '../../assets/1.png'

const Banner = () => {
   return (
      <div>
         <div className="bg-Banner-img rounded-3xl">
            <div className="bg-gradient-to-r from-[#a832328c] to-[#000000A6] flex items-center justify-center rounded-3xl  gap-28">
               <div>
                  <h1 className="font-bold text-6xl text-white play-font my-5 ">
                     Books to freshen up <br /> your bookshelf
                  </h1>
                  <Link to={"/listed"}>
                     <button className=" btn  rounded-xl bg-color play-font text-white hover:text-black border-0">View The List</button>
                  </Link>
               </div>
               <div>
                  <img className="w-80" src={logo} alt="" />
               </div>
            </div>
         </div>
         <div className="my-16">
            <h2 className="text-center text-3xl font-bold ">Books</h2>
         </div>
      </div>
   );
};

export default Banner;
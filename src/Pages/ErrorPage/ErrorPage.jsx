import { Link } from "react-router-dom";
import ErrorImg from '../../assets/404.gif'

const ErrorPage = () => {
   return (
      <div className="flex justify-center items-center h-screen">
         <div className="text-center">
            <img src={ErrorImg} alt="" />
            <Link to={"/"}>
               {" "}
               <button className="btn">Go Back</button>{" "}
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;
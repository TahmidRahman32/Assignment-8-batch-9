import { Outlet, } from "react-router-dom";
import Nav from "../../Sheard/Nav";
import  { Toaster } from "react-hot-toast";
const Root = () => {
   // const navigation = useNavigation();
   return (
      <div className="max-w-7xl mx-auto my-8">
         <Nav></Nav>
         {/* {navigation.state === "loading" ? (
            <div>
               <span className="loading loading-bars loading-xs"></span>
               <span className="loading loading-bars loading-sm"></span>
               <span className="loading loading-bars loading-md"></span>
               <span className="loading loading-bars loading-lg"></span>
            </div>
         ) : (
         )} */}
         <Outlet></Outlet>
         <Toaster />
      </div>
   );
};

export default Root;

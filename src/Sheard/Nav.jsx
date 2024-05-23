import { NavLink } from "react-router-dom";

const Nav = () => {
   const navLinks = (
      <div className="flex gap-5 font-bold my-8">
         <NavLink className={({ isActive }) => (isActive ? "text-blue-600 underline " : "font-bold")} to="/">
            Home
         </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "text-blue-600 underline " : "font-bold")} to="/bookList">
            Listed Books
         </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "text-blue-600 underline " : "font-bold")} to="/pagesToRead">
            Pages to Read
         </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "text-blue-600 underline " : "font-bold")} to="/chart">
           Chart
         </NavLink>
      </div>
   );
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
               </ul>
            </div>
            <a className=" text-xl font-bold uppercase">Brainy Books</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
         </div>
         <div className="navbar-end gap-3">
            <a className="btn text-color">SignIn</a>
            <a className="btn text-color">SignUp</a>
         </div>
      </div>
   );
};

export default Nav;

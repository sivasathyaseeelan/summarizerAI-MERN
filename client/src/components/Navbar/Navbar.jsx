import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [routeLogic, setRouteLogic] = useState(false);

  useEffect(() => {
    if (location.pathname === '/Summarizer') {
      setRouteLogic(true);
    } else {
      setRouteLogic(false);
    }
  }, [location]);

  const Logout = () => {
    localStorage.removeItem('token')
  }
    
  return (
    <header className="flex justify-between items-center sm:px-10 md:px-20 lg:px-48 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to='/'>
          <div className="flex gap-1 text-xl md:text-3xl font-bold">
            <span className="text-blue-500">s</span>
            <span className="text-red-500">U</span>
            <span className="text-yellow-500">m</span>
            <span className="text-green-500">M</span>
            <span className="text-orange-500">a</span>
            <span className="text-blue-500">r</span>
            <span className="text-red-500">I</span>
            <span className="text-yellow-500">z</span>
            <span className="text-green-500">e</span>
            <span className="text-orange-500">R</span>
          </div>
        </Link>
        {console.log(window.location.pathname)}
        {routeLogic ? 
        <Link to='/Signin'>
          <h1
           className="md:text-lg font-medium text-white px-4 py-[5px] rounded-md hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#6469ff]"
           onClick={Logout}>Logout</h1>
        </Link> :
        <Link to='/Summarizer'>
          <h1 className="md:text-lg font-medium text-white px-4 py-[5px] rounded-md hover:scale-110 hover:shadow-xl transition-all duration-300 bg-[#6469ff]">Let's Summarize</h1>
        </Link>
        }
      </header>
  )
}

export default Navbar
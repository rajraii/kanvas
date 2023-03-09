import React from "react";
import { Link } from "react-router-dom";
import "./index.style.css";

const Home = () => {
  return (
    <div className="p-3 h-full">
      <Link className="w-full  md:h-[15rem] h-32 flex justify-start items-end p-3 drop-shadow-lg rounded-md overflow-hidden cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1411253803/photo/universal-linkedin-banner-with-pink-sunset-over-the-alps-for-any-profession.jpg?b=1&s=170667a&w=0&k=20&c=V3-D3Hc47eMkqbyPDOvQRqcsCrwZPTckg_1OdDWYoS8="
          alt="banner"
          className="z-[-1] w-full h-full absolute top-0 left-0"
        />
        <div>
          <h3 className="text-slate-50 opacity-90">First Blog</h3>
          <p className="text-slate-100 opacity-85">Hey this is my first Blog</p>
        </div>
      </Link>


      <section>
        
      </section>
    </div>
  );
};

export default Home;

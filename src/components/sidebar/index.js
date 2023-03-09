import React from "react";
import { Link, useLocation } from "react-router-dom";
import { authorization } from "../../config/shared/shared";

import customRoutes from "../../route/route.config";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-white relative">
      <div
        className="w-full p-2 text-3xl font-medium overflow-hidden flex items-center"
        style={{ minBlockSize: 64 }}
      >
        <Link className="hidden text-slate-400 md:flex" to="/">
          Kanvas
        </Link>
        <Link className="flex md:hidden" to="/">
          KS
        </Link>
      </div>

      <div className="h-[90vh]">
        {customRoutes.map(
          (item, idx) =>
            item?.authorization === authorization.SHOW && (
              <div key={idx} className="w-full px-2">
                {location.pathname === item?.path ? (
                  <Link
                    to={item?.path}
                    className="active rounded-md nav-link flex items-center justify-center md:justify-start gap-2 text-base drop-shadow-lg px-2 text-white"
                  >
                    <p className="text-lg font-light ">{item?.avatar}</p>
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                ) : (
                  <Link
                    to={item?.path}
                    className="nav-link rounded-md justify-center md:justify-start flex items-center gap-2 text-base drop-shadow-sm px-2"
                  >
                    <p className="text-lg font-light">{item?.avatar}</p>
                    <p className="font-light hidden md:flex">{item?.title}</p>
                  </Link>
                )}
              </div>
            )
        )}
      </div>

      {/* <div className="absolute w-full bottom-0 border-1 solid border-t-2 border-slate-100 flex justify-end items-center p-3">
        <RiMenu3Line className="text-gray-500" />
      </div> */}
    </div>
  );
};

export default Sidebar;

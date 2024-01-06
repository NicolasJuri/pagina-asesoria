import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-purple-400">404</h1>
            <h1 className="text-6xl font-medium py-8 p-5">¡Ups! La página solicitada no existe</h1>
            <p className="text-2xl pb-8 px-12 font-medium mb-7">
              La página que buscas no existe. Puede haber sido movida o eliminada.
            </p>
            <Link className="btn m-7" to="/">
              Inicio
            </Link>
            <Link className="btn" to="/contact">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

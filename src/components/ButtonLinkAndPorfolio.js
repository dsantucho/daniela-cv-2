
import * as React from "react";

const ButtonLinkAndPorfolio = () => {


  return (
    <div className="flex">
      <a href="https://github.com/dsantucho" target="_blank">
        <button
          type="button"
          className=" bg-slate-50 rounded-none hover:rounded-md h-14 w-32 text-2xl mx-4 p-2"
        >
          Porfolio
        </button>
      </a>

      <a href="https://www.linkedin.com/in/dsantucho/" target="_blank">
        <button
          type="button"
          className=" bg-slate-50 rounded-none hover:rounded-md h-14 w-32 text-2xl mx-4 p-2"
        >
          Linkedin
        </button>
      </a>

      <a href="https://daniela-santucho-cv.netlify.app/" target="_blank">
        <button
          type="button"
          className=" bg-slate-50 rounded-none hover:rounded-md h-14 text-2xl mx-4 p-2"
        >
          Personal Web Page
        </button>
      </a>
    </div>
  );
};

export default ButtonLinkAndPorfolio;

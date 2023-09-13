import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Medusa from "../assets/paralax-layers/bottom4-01.png";

import Presentation from "../components/Presentation";

//coomponets
import HeaderParallex from "../components/HeaderParallex";
import BottomParallex from "../components/BottomParallex";

const Home = () => {
  return (
    <div className="w-full  bg-sky-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4 mt-24 ">
        <Parallax
          pages={3}
          style={{ top: "0", left: "0" }}
          className="animation mt-24"
        >
          <HeaderParallex />

          <ParallaxLayer
            offset={0.99}
            speed={0.4}
            factor={4}
            className="bg-[#188ec9]"
          >
            <Presentation />
          </ParallaxLayer>

          <BottomParallex />

          <ParallaxLayer
            sticky={{ start: 0.8, end: 12 }}
            speed={-3}
            style={{
              backgroundImage: `url(${Medusa})`,
              backgroundSize: "auto 640px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              width: "100%",
            }}
          />
        </Parallax>
      </div>
    </div>
  );
};

export default Home;

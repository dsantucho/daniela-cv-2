import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import BottomBackgraund from "../assets/paralax-layers/bottom1-01.png";
import Medusa from "../assets/paralax-layers/bottom4-01.png";
import Land from "../assets/paralax-layers/bottom3-01.png";
import Algas from "../assets/paralax-layers/bottom2-01.png";
import Fish from "../assets/paralax-layers/bottom5-01.png";
import Nemo from "../assets/paralax-layers/bottom7-01.png";
import Presentation from "../components/Presentation";

import backgraundTop from "../assets/paralax-layers/layer1-01.png"
import backgraundTopClouds from "../assets/paralax-layers/layer22-01.png"
import backgraundTopMountains from "../assets/paralax-layers/layer3-01.png"
import backgraundTopTrees1 from "../assets/paralax-layers/layer4-01.png"
import backgraundTopCastel from "../assets/paralax-layers/layer5-01.png"
import backgraundTopTree2 from "../assets/paralax-layers/layer6-01.png"
import backgraundTopWater from "../assets/paralax-layers/layer7-01.png"
import backgraundTopBoat from "../assets/paralax-layers/boat-disney.png"

const Home = () => {
  return (
    <div className="w-full  bg-sky-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-24 ">
      <Parallax pages={3} style={{ top: "0", left: "0" }} className="animation mt-24">
        <ParallaxLayer offset={0} speed={0.5} factor={2}>
          <div className="animation_layer parallax" id="sky"></div>
        </ParallaxLayer>

         <ParallaxLayer offset={0} speed={1}>
          <div className="animation_layer parallax" id="clouds"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="mountains"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.01}>
          <div className="animation_layer parallax" id="trees"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.01}>
          <div className="animation_layer parallax" id="castel"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="trees2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="water"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.01}>
          <div className="animation_layer_no_repete parallax" id="boat"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.4} factor={4} className="bg-[#188ec9]">
          <Presentation/>
        </ParallaxLayer>
        
        <ParallaxLayer
        offset={2}
        speed={1}
        factor={3}
        style={{
          backgroundImage: `url(${BottomBackgraund})`,
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          backgroundImage: `url(${Land})`,
          backgroundSize: 'cover',
        }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          backgroundImage: `url(${Algas})`,
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={2}
        speed={5}
        style={{
          backgroundImage: `url(${Fish})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          width: '100%',
        }}/>
      {/* <animated.div
        style={{
          backgroundImage: `url(${Fish})`,
          backgroundSize: 'cover',
          ...springs,
        }}/> */}
      <ParallaxLayer
        offset={2}
        speed={-0.5}
        style={{
          backgroundImage: `url(${Nemo})`,
          backgroundSize: 'auto 1038px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
          width: '100%',
        }}/>

      <ParallaxLayer
        sticky={{ start:0.9, end: 12 }}
        speed={-2}
      >
        <img src={Medusa} />
      </ParallaxLayer>

      </Parallax>
    </div>
  </div>

  );
};

export default Home;

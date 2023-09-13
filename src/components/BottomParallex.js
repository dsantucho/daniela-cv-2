import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import BottomBackgraund from "../assets/paralax-layers/bottom1-01.png";

import Land from "../assets/paralax-layers/bottom3-01.png";
import Algas from "../assets/paralax-layers/bottom2-01.png";
import Fish from "../assets/paralax-layers/bottom5-01.png";
import Nemo from "../assets/paralax-layers/bottom7-01.png";

const BottomParallex = () => {
  return (
    <div className=" bg-sky-600">
         <ParallaxLayer
        offset={2}
        speed={1}
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
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          width: '100%',
        }}
      />
      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          backgroundImage: `url(${Algas})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          width: '100%',
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
      <ParallaxLayer
        offset={2}
        speed={-0.5}
        style={{
          backgroundImage: `url(${Nemo})`,
          backgroundSize: 'auto 640px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          width: '100%',
        }}/>



    </div>
  )
}

export default BottomParallex
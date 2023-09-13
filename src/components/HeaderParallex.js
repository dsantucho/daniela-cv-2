import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

import backgraundTopSky from "../assets/paralax-layers/layer1-01.png";
import backgraundTopClouds from "../assets/paralax-layers/layer22-01.png";
import backgraundTopMountains from "../assets/paralax-layers/layer3-01.png";
import backgraundTopDarkTrees from "../assets/paralax-layers/layer4-01.png";
import backgraundTopCastel from "../assets/paralax-layers/layer5-01.png";
import backgraundTopLightTree from "../assets/paralax-layers/layer6-01.png";
import backgraundTopWater from "../assets/paralax-layers/layer7-01.png";
import backgraundTopBoat from "../assets/paralax-layers/boat-disney.png";

const HeaderParallex = () => {
  return (
    <div className=" bg-sky-600">
      {/* START SKY en small y en mas xl para quedar en posicion */}
      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopSky})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END SKY en small y en mas xl para quedar en posicion */}

      {/* START CLOUDS en small 1024 */}
      <ParallaxLayer
        offset={0}
        speed={-0.2}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopClouds})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END CLOUDS  */}

      {/* START MOUNTAINS*/}
      <ParallaxLayer
        offset={0.02}
        speed={-0.3}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopMountains})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END MOUNTAINS*/}

      {/* START DARK TREES*/}
      <ParallaxLayer
        offset={0.1}
        speed={0.2}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopDarkTrees})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END DARK TREES*/}
      {/* START LIGHT TREES*/}
      <ParallaxLayer
        offset={0.2}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopLightTree})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END LIGHT TREES*/}

      {/* START CASTEL*/}
      <ParallaxLayer
        offset={0.2}
        speed={0.4}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopCastel})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END CASTEL*/}

      {/* START LIGHT TREES*/}
      <ParallaxLayer
        offset={0.3}
        speed={0.5}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopLightTree})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block"
      />
      {/* END LIGHT TREES*/}

      {/* START WATER*/}

      {/* <ParallaxLayer offset={0} speed={0.4}>
        <div className="animation_layer parallax" id="water"></div>
      </ParallaxLayer> */}

      <ParallaxLayer
        offset={0}
        speed={0.3}
        factor={1}
        style={{
          backgroundImage: `url(${backgraundTopWater})`,
          backgroundSize: "auto 1038px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: 'bottom center',
          position: "absolute",
          width: "100%",
        }}
        className="block"
      />

      {/* END WATER*/}

      {/* START boat en small y en mas xl para quedar en posicion */}
      <ParallaxLayer
        offset={0.2}
        speed={0.02}
        style={{
          backgroundImage: `url(${backgraundTopBoat})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: "100%",
        }}
        className="block xl:hidden"
      />
      <ParallaxLayer
        offset={0}
        speed={0.01}
        style={{
          backgroundImage: `url(${backgraundTopBoat})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: "100%",
        }}
        className="hidden xl:block"
      />
      {/*END boat en small y en mas xl para quedar en posicion */}
    </div>
  );
};

export default HeaderParallex;

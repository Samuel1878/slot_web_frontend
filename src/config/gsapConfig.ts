import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { PixiPlugin } from "gsap/PixiPlugin";

export const registerGsapPlugins = () => {
    gsap.registerPlugin(useGSAP, PixiPlugin);
};
// export default gsap;
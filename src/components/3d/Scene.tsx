import {Stars} from "@react-three/drei";
import {Bloom, EffectComposer, Noise, SMAA, ToneMapping, Vignette,} from "@react-three/postprocessing";
import {useRecoilValue} from "recoil";
import {graphicOptionsState,} from "../../atoms.ts";
import {CountryBorders} from "./planets/countryBorders.tsx";
import {Suspense, useRef} from "react";
import Sun from "./planets/Sun.tsx";
import Moon from "./planets/Moon.tsx";
import CameraControl from "./common/CameraControl.tsx";
import Earth from "./planets/Earth.tsx";
import MobileEarth from "./planets/MobileEarth.tsx";
import Ocean from "./planets/Ocean.tsx";
import SimpleTooltip from "./SimpleTooltip.tsx";
import { Group } from "three/examples/jsm/libs/tween.module.js";


function Scene() {
    const toolTipGroupRef = useRef<Group | null>(null);
    const graphicOptions = useRecoilValue(graphicOptionsState);
    return (
        <>
            {graphicOptions.stars ? (
                <Stars
                    radius={100}
                    depth={50000}
                    count={1000}
                    factor={4}
                    saturation={0}
                    fade={true}
                />
            ) : (
                <></>
            )}
            <CameraControl/>
            <Suspense
                fallback={
                    <>
                        <MobileEarth/>
                    </>
                }
            >
                {graphicOptions.highResolutionEarth ? <Earth/> : <MobileEarth/>}
            </Suspense>
            <SimpleTooltip
                groupRef={toolTipGroupRef}
            />
            <Sun/>
            {graphicOptions.enableMoon ? (
                <Suspense fallback={<></>}>
                    <Moon/>
                </Suspense>
            ) : (
                <></>
            )}
            {graphicOptions.countryBorders ? <CountryBorders/> : <></>}
            <Ocean/>
            <EffectComposer>
                {graphicOptions.bloom ? (
                    <Bloom
                        luminanceThreshold={0}
                        luminanceSmoothing={0.9}
                        height={300}
                        intensity={0.7}
                    />
                ) : (
                    <></>
                )}
                {graphicOptions.vignette ? (
                    <Vignette eskil={false} offset={0.1} darkness={0.9}/>
                ) : (
                    <></>
                )}
                {graphicOptions.SMAA ? <SMAA/> : <></>}
                <Noise opacity={0.01}/>
                <ToneMapping
                    mode={6}
                    adaptive={true} // toggle adaptive luminance map usage
                    resolution={256} // texture resolution of the luminance map
                    middleGrey={0.6} // middle grey factor
                    maxLuminance={16.0} // maximum luminance
                    averageLuminance={1.0} // average luminance
                    adaptationRate={1.0} // luminance adaptation rate
                />
            </EffectComposer>
        </>
    );
}

export default Scene;

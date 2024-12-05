import {useLoader} from "@react-three/fiber";
import {Texture, TextureLoader} from "three";
import OceanMap from "../../../assets/earth/10k/ocean_map.jpg";
import {Sphere} from "@react-three/drei";
import {EARTH_RADIUS} from "../../../constants.ts";
import {toast} from "react-toastify";
import EARTH_FRAGMENT from "../shader/earth_fragment.glsl?raw";
import EARTH_VERTEX from "../shader/earth_vertex.glsl?raw";

export default function Ocean() {
    // load texture
    const [oceanMap] = useLoader(
        TextureLoader,
        [OceanMap],
        (loader) => {
            toast.loading(`Downloading High Resolution Earth Textures...`, {
                toastId: "loadingEarth",
                autoClose: false,
            });
            loader.manager.onProgress = (_url, itemsLoaded, itemsTotal) => {
                if (itemsLoaded === itemsTotal) {
                    toast.dismiss("loadingEarth");
                }
            };
        },
    ) as Texture[];
    return (
        <>
            <Sphere
                args={[EARTH_RADIUS, 100, 100]}
                onPointerOver={(e) => {
                    e.stopPropagation();
                }}

                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <meshPhysicalMaterial
                    bumpMap={oceanMap}
                    bumpScale={0.01}
                    color={"#b4b4b4"}

                />
            </Sphere>
        </>
    );
}

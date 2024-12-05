import React, { MutableRefObject, useEffect } from "react";
import { Html } from "@react-three/drei";
import { Group } from "three";

import bodyImage from "../../assets/human/rb_109679.png";

function SimpleToolTip(props: { groupRef: MutableRefObject<Group> }) {
    useEffect(() => {
        if(props.groupRef !== undefined){
            props.groupRef.current.position.set(-3.5,-2,0);
        }
    }, [props.groupRef]);
  return (
    <group ref={props.groupRef}>
      <Html>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            maxWidth: "200px", // Limite la largeur du tooltip
          }}
        >
          <div>
            <img
              src={bodyImage}  // Utilisation de l'image importée
              alt="Tooltip image"
              style={{
                width: "100%",  // L'image prend toute la largeur disponible du conteneur
                maxWidth: "80px",  // Limite la largeur maximale
                height: "auto",  // Ajuste la hauteur automatiquement pour garder le ratio
                objectFit: "contain",  // Maintient le ratio sans déformation
                marginBottom: "10px",
              }}
            />
          </div>
          <div>Hello World</div>
        </div>
      </Html>
    </group>
  );
}

export default SimpleToolTip;

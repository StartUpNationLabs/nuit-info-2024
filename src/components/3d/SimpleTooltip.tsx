import React, { MutableRefObject } from "react";
import { Html } from "@react-three/drei";
import { Group } from "three";

function SimpleToolTip(props: { groupRef: MutableRefObject<Group> }) {
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
          }}
        >
          Hello World
        </div>
      </Html>
    </group>
  );
}

export default SimpleToolTip;

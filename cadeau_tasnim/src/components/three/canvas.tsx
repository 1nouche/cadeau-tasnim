import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Controls from "components/three/controls";
import Gallery from "components/three/gallery";
import Painting from "components/three/painting";
import { Loader as CanvasLoader, Preload } from "@react-three/drei";
import { Mesh } from "three";

const IndexPage = (): JSX.Element => {
  const [floor, setFloor] = useState<Mesh>();

  return (
    <>
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <Controls floor={floor} />
          <Painting
            name="cris"
            size={[2.664, 3.312]}
            position={[0, 1.6, -5.8]}
          />

          <Painting
            name="art"
            size={[2.34, 2.984]}
            position={[-8.2, 1.6, -5.8]}
          />

          <Painting
            name="nuit_etoile"
            size={[2.664, 3.312]}
            position={[-8.2, 1.6, 5.8]}
            angle={180 * (Math.PI / 180)}
          />

          <Painting
            name="monet_deux_saules"
            size={[15, 2]}
            position={[-17, 1.6, 17.3]}
            angle={180 * (Math.PI / 180)}
          />
          <Painting
            name="monet_matin_saules"
            size={[15, 2]}
            position={[-0.2, 1.6, 17.3]}
            angle={180 * (Math.PI / 180)}
          />

          <Painting
            name="monet_nuages"
            size={[11, 2]}
            position={[-25.8, 1.6, 11.3]}
            angle={Math.PI / 2}
          />
          <Painting
            name="monet_couleur"
            size={[7, 2]}
            position={[9.2, 1.6, 11.3]}
            angle={-Math.PI / 2}
          />

          <Painting
            name="monet_bassin"
            size={[3, 3]}
            position={[-8.2, 1.6, 6.5]}
          />

          <Painting
            name="monet1"
            size={[3.6, 2.52]}
            position={[-18.2, 1.6, -5.8]}
          />

          <Painting
            name="liberté"
            size={[4.3, 4]}
            position={[-30.5, 1.6, -5.8]}
          />
          <Painting
            name="meduse"
            size={[4.9, 4]}
            position={[-30.5, 1.6, 5.7]}
            angle={180 * (Math.PI / 180)}
          />
          <Painting
            name="cueillette"
            size={[4.9, 4]}
            position={[-21.5, 1.6, 5.7]}
            angle={180 * (Math.PI / 180)}
          />

          <Painting
            name="parquet"
            size={[4.9, 4]}
            position={[5.5, 1.6, 5.7]}
            angle={180 * (Math.PI / 180)}
          />
          <Gallery setFloor={setFloor} />
          <Preload all />
        </Suspense>
        <ambientLight />
      </Canvas>
      <CanvasLoader
        barStyles={{ height: "10px" }}
        dataStyles={{ fontSize: "14px" }}
        dataInterpolation={(percent) => `Loading ${percent.toFixed(0)}%`}
      />
    </>
  );
};

export default IndexPage;

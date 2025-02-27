'use client'

import { useEffect, useRef } from "react";
// @ts-ignore
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world"; 

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new jsVectorMap({
      selector: "#map",
      map: "world",
      zoomButtons: false,
    });

    return () => {
      map.destroy(); 
    };
  }, []);

  return <div id="map" ref={mapRef} style={{ height: "300px", width: "100%" }} />;
};

export default WorldMap;


import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export default function Map() {
  return (
    <ComposableMap
      projectionConfig={{
        center:[10,4],
        scale: 1000,
      }}
      style={{ width: "98%", height: "98%" }}
    >
      <Geographies geography={geoUrl} fill="#3b306c" stroke="#bea5a5">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[9.070594259185516, 7.472078670409976]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Abuja"}
        </text>
      </Annotation>
    </ComposableMap>
  );
}

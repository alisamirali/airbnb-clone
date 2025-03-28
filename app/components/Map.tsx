"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

// @ts-expect-error - Monkey patching
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
});

type MapProps = {
  center?: number[];
};

const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export function Map({ center }: MapProps) {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    >
      <TileLayer url={url} />
      {center && <Marker position={center as L.LatLngExpression} />}
    </MapContainer>
  );
}

export default Map;

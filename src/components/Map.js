import React from "react";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//Generates and displays map, stores current map on state becauase map isnt mutable, so it updates everytime the map State changes
function MapComponent({ center, zoom }) {
  const [mapState, setMapState] = React.useState(null);

  //Move to another location
  if (mapState) {
    mapState.flyTo(center);
  }
  const styleMap = { width: "100%", height: "60vh" };

  return (
    <div className="map">
      <MapContainer
        whenCreated={setMapState}
        style={styleMap}
        center={center}
        zoom={12}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export { MapComponent };

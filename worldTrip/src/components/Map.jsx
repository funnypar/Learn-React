import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { useState } from "react";
import { useCities } from "../contexts/CitiesProvider";

export default function Map() {
    const { cities } = useCities();
    // eslint-disable-next-line no-unused-vars
    const [mapPosition, setMapPosition] = useState([40, 0]);
    // const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    // const [searchParams, setSearchParams] = useSearchParams();
    // onClick={() => navigate("form")}
    return (
        <MapContainer
            center={mapPosition}
            zoom={6}
            scrollWheelZoom={true}
            className={styles.map}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.fr/h/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cities.map((city) => (
                <Marker
                    position={[city.position.lat, city.position.lng]}
                    key={city.id}
                >
                    <Popup>
                        <p>
                            <span>{city.emoji}</span>
                            {city.cityName}
                        </p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

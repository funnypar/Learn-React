/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvent,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
import { useUrlParams } from "../hooks/useUrlParams";

export default function Map() {
    const navigate = useNavigate();
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const [latPosition, lngPosition] = useUrlParams();
    const { cities } = useCities();

    useEffect(() => {
        if (+latPosition !== 0 && +lngPosition !== 0)
            setMapPosition([+latPosition, +lngPosition]);
    }, [latPosition, lngPosition]);

    return (
        <div className={styles.wrapper}>
            <MapContainer
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={styles.map}
                onClick={() => navigate("form")}
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
                <MyMap position={mapPosition} />
                <MapEvent />
            </MapContainer>
        </div>
    );
}

function MyMap({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

function MapEvent() {
    const navigate = useNavigate();
    useMapEvent("click", (e) => {
        navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    });
    return null;
}

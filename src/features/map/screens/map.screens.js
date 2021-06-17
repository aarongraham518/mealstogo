import React, {useContext, useState, useEffect} from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

import {Search} from "../components/search.components";
import {LocationContext} from '../../../services/location/location.context';
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)` 
    height: 100%;
    width: 100%;
`;
export const MapScreen = () => {
    //pull in location and restaurant context
    const {location} = useContext(LocationContext);
    const {restaurants = [] } = useContext(RestaurantsContext);

    //zoom level on map
    const [latDelta, setLatDelta] = useState(0);

    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
    <>
        <Search/>
        <Map
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
            }}    
        >
            {restaurants.map((restaurant) => {
                return null;
            })}
        </Map>
    </>
    );
}
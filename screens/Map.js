// import { Location } from "expo-location";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

import { doctors } from "../constants/doctors";

const MapScreen = ({ route }) => {
  const [userLocation, setUserLocation] = useState(null);
  const { docLatitude, docLongitude } = route.params || {
    docLatitude: null,
    docLongitude: null,
  };

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission not granted");

      return;
    }

    const { coords } = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = coords;

    // Use latitude and longitude as needed
    return { latitude, longitude };
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      const location = await getCurrentLocation();
      if (location) {
        setUserLocation(location);
      }
    };

    fetchUserLocation();
  }, []);

  const startLocation = {
    latitude: userLocation.latitude, // Replace with the actual latitude of the starting point
    longitude: userLocation.longitude, // Replace with the actual longitude of the starting point
  };

  const endLocation = {
    latitude: 15.14122572831936, // Replace with the actual latitude of the ending point
    longitude: 120.58918808196394, // Replace with the actual longitude of the ending point
  };

  const routeCoordinates = [startLocation, endLocation];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={
          docLatitude && docLongitude // Check if docLatitude and docLongitude are not null
            ? {
                latitude: docLatitude,
                longitude: docLongitude,
                latitudeDelta: 0.0012,
                longitudeDelta: 0.0171,
              }
            : userLocation
            ? {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0012,
                longitudeDelta: 0.0171,
              }
            : {
                latitude: 15.1451,
                longitude: 120.5946,
                latitudeDelta: 0.0012,
                longitudeDelta: 0.0171,
              }
        }
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            }}
            title="Your Location"
            description="You are here"
          />
        )}

        {doctors.map((doctor) =>
          doctor.latitude && doctor.longitude ? (
            <Marker
              key={doctor.name} // Add a unique key
              coordinate={{
                latitude: doctor.latitude,
                longitude: doctor.longitude,
              }}
              pinColor="blue"
              title={doctor.name}
              description={doctor.specialty}
            />
          ) : null
        )}

        {docLatitude && docLongitude && (
          <Marker
            coordinate={{
              latitude: docLatitude,
              longitude: docLongitude,
            }}
            pinColor="blue"
            title="Doctor's Location"
            description="This is the doctor's location"
          />
        )}
        <Polyline
          coordinates={routeCoordinates}
          strokeWidth={5} // Adjust the width of the polyline as needed
          strokeColor="#00f" // Adjust the color of the polyline as needed
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;

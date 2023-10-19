// import { Location } from "expo-location";
import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState(null);

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
        console.log(location);
      }
    };

    fetchUserLocation();
  }, []);
  console.log(userLocation);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={
          userLocation
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

        <Marker
          coordinate={{
            latitude: 15.140258323558108,
            longitude: 120.59439213905009,
          }}
          pinColor="blue"
          title="Holy Family Medical Center"
          description="This is a marker in React Native"
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

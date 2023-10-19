import { Pedometer } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Steps = () => {
  const [stepCount, setStepCount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const checkAvailability = async () => {
    const status = await Pedometer.isAvailableAsync();
    setIsAvailable(status);
    return status;
  };

  const getPermissions = async () => {
    const { granted } = await Pedometer.requestPermissionsAsync();
    setIsAvailable(granted);
    return granted;
  };

  const startPedometer = async () => {
    console.log(isAvailable);
    setSubscription(
      Pedometer.watchStepCount(({ steps }) => {
        setStepCount(steps);
      })
    );
  };

  const stopPedometer = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    if (checkAvailability() && getPermissions()) {
      startPedometer();
    }
    return () => stopPedometer();
  }, []);

  if (!isAvailable) {
    return (
      <View style={style.container}>
        <Text>Not available.</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <Text style={{ fontSize: 30, marginVertical: 15 }}>Pedometer</Text>
      <Text>Step count: {stepCount}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Steps;

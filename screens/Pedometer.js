import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Pedometer } from "expo-sensors";

const PedometerView = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [stepCount, setStepCount] = useState(0);

  const getPermissions = async () => {
    const { granted } = await Pedometer.requestPermissionsAsync();
    setIsAvailable(granted);
  };

  useEffect(() => {
    getPermissions();
    console.log(isAvailable);
    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
      console.log(result);
    });
    return () => subscription && subscription.remove();
  }, []);

  return (
    <View>
      <Text>Pedometer.isAvailableAsync(): {isAvailable}</Text>
      <Text>Walk! And watch this go up: {stepCount}</Text>
    </View>
  );
};

export default PedometerView;

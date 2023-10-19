import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const SleepTracker = () => {
  const [sleepDuration, setSleepDuration] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (isTracking) {
      // Start the timer when tracking begins
      const interval = setInterval(() => {
        if (startTime) {
          const currentTime = new Date();
          const elapsedMilliseconds = currentTime - startTime;
          const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000); // 1 minute = 60,000 milliseconds
          setSleepDuration(elapsedMinutes);
        }
      }, 1000); // Update every 1 second

      return () => {
        // Clean up the timer when tracking stops
        clearInterval(interval);
      };
    }
  }, [isTracking, startTime]);

  const startTrackingSleep = () => {
    setIsTracking(true);
    setStartTime(new Date()); // Record the start time
  };

  const stopTrackingSleep = () => {
    setIsTracking(false);
    setStartTime(null); // Reset the start time
  };

  return (
    <View>
      <Text>Sleep Tracker</Text>
      <Text>Sleep Duration: {sleepDuration} minutes</Text>
      {isTracking ? (
        <Button title="Stop Tracking" onPress={stopTrackingSleep} />
      ) : (
        <Button title="Start Tracking" onPress={startTrackingSleep} />
      )}
    </View>
  );
};

export default SleepTracker;

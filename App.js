import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Home from "./screens/Home";
import Map from "./screens/Map";
import PedometerView from "./screens/Pedometer";
import Search from "./screens/Search";
import SleepTracker from "./screens/SleepTracker";
import Steps from "./screens/Steps";
import Test from "./screens/Test";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Pedometer" component={PedometerView} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="Sleep Tracker" component={SleepTracker} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

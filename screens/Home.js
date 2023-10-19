import React from "react";
import { View, Text, Button, SafeAreaView, StatusBar } from "react-native";

function Home({ navigation }) {
  return (
    
    <View style={{ flex: 1, backgroundColor: "white", margin: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Map"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Map")}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Test"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Test")}
        />
      </View>
      <View>
        <Button
          title="Pedometer"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Pedometer")}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Steps"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Steps")}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Sleep Tracker"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Sleep Tracker")}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          title="Search"
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </View>
  );
}

export default Home;

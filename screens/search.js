import React from "react";
import { View, StatusBar } from "react-native";

import SearchComponent from "../components/SearchComponent";
<<<<<<<< HEAD:screens/Search.js
import { doctors } from "../constants/doctors";
========
import { SafeAreaView, View, StatusBar } from "react-native";
import { doctors } from "../doctors";
import { Button } from "react-native-web";
>>>>>>>> origin/master:screens/SearchScreen.js

const Search = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <SearchComponent doctors={doctors} />
    </View>
  );
};

export default Search;

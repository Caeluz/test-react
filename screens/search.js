import React from "react";
import { View, StatusBar } from "react-native";

import SearchComponent from "../components/SearchComponent";
import { doctors } from "../constants/doctors";

const Search = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <SearchComponent doctors={doctors} />
    </View>
  );
};

export default Search;

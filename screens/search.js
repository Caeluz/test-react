import React from "react";
import SearchComponent from "../components/SearchComponent";
import { SafeAreaView, View, StatusBar } from "react-native";
import { doctors } from "../doctors";

const Search = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar />
      <SearchComponent doctors={doctors} />
    </View>
  );
};

export default Search;

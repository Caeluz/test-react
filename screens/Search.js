import React from "react";
import { StatusBar, SafeAreaView } from "react-native";

import SearchComponent from "../components/SearchComponent";
import { doctors } from "../constants/doctors";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar />
      <SearchComponent doctors={doctors} />
    </SafeAreaView>
  );
};

export default Search;

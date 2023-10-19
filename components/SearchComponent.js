import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

const SearchComponent = ({ doctors }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  // const normalizedSearchText = searchText.toLowerCase();
  // const filteredDoctors = doctors.filter(
  //   (doctor) =>
  //     doctor.name.toLowerCase().includes(normalizedSearchText) ||
  //     doctor.specialty.toLowerCase().includes(normalizedSearchText) ||
  //     doctor.location.toLowerCase().includes(normalizedSearchText)
  // );

  // Matches one or more text (case-insensitive)
  const searchQuery = new RegExp(searchText, "gi");

  const filteredDoctors = doctors.filter((doctor) => {
    const fieldsToSearch = [doctor.name, doctor.specialty, doctor.location];

    // If either name, specialty, matches with the query, return it
    return fieldsToSearch.some((field) => searchQuery.test(field));

    // If only the doctor name should be matched
    // return searchQuery.test(doctor.name),
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Doctors..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      <View style={styles.resultContainer}>
        {searchText && filteredDoctors.length === 0 ? (
          <Text style={styles.noResultsText}>
            No doctors match your search criteria.
          </Text>
        ) : (
          <FlatList
            data={searchText ? filteredDoctors : doctors}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={({ pressed }) => [
                  styles.doctorCard,
                  pressed && { opacity: 0.5 },
                ]}
              >
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <Text style={styles.doctorName}> {item.name}</Text>

                <Text style={styles.doctorLocation}>{item.location}</Text>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    height: 60, // Set a fixed height for the search input container
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
  },
  resultContainer: {
    flex: 1,
  },
  doctorCard: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    // paddingLeft: 50,
    // paddingRight: "auto",
    // paddingRight: 120,
    marginBottom: 7,
    borderRadius: 8,
  },
  doctorSpecialty: {
    backgroundColor: "#0d98ba",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
    marginRight: "auto",
    marginBottom: 4,
    borderRadius: 50,
    marginLeft: 2,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  doctorName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  doctorLocation: {
    marginTop: 4,
    paddingLeft: 5,
    fontSize: 15,
    color: "gray",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default SearchComponent;

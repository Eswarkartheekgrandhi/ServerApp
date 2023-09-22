import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const InfoScreen = ({ navigation }) => {
  const [data, setData] = useState([
    {
      id: "10001",
      type: "Chair",
      status: "Active",
      lastDataReceived: "2 hours ago",
      isSelected: false,
    },
    {
      id: "10002",
      type: "Bed",
      status: "Inactive",
      lastDataReceived: "3 hours ago",
      isSelected: false,
    },
    {
      id: "10003",
      type: "Chair",
      status: "Active",
      lastDataReceived: "2 hours ago",
      isSelected: false,
    },
    {
      id: "10004",
      type: "Bed",
      status: "Inactive",
      lastDataReceived: "3 hours ago",
      isSelected: false,
    },
    {
      id: "10005",
      type: "Chair",
      status: "Active",
      lastDataReceived: "2 hours ago",
      isSelected: false,
    },
    {
      id: "10006",
      type: "Bed",
      status: "Inactive",
      lastDataReceived: "3 hours ago",
      isSelected: false,
    },
    {
      id: "10007",
      type: "Chair",
      status: "Active",
      lastDataReceived: "2 hours ago",
      isSelected: false,
    },
    {
      id: "10008",
      type: "Bed",
      status: "Inactive",
      lastDataReceived: "3 hours ago",
      isSelected: false,
    },
  ]);
  const toggleSelect = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/chair.png")} style={styles.chair} />
      </View>
      <View style={styles.searchBar}>
        <View style={styles.searchContainer}>
          <View style={styles.leftSearch}>
            <Image
              source={require("../assets/SearchIcon.png")}
              style={styles.searchIcon}
            />
          </View>
          <View style={styles.rightSearch}>
            <TextInput style={styles.searchInput} placeholder="Search Chair" />
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/HeartIcon.png")}
              style={styles.HeartIcon}
            />
            <Image
              source={require("../assets/filterIcon.png")}
              style={styles.FilterIcon}
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>ID</Text>
          <Text style={[styles.tableHeader, styles.typeHeader]}>Type</Text>
          <Text style={styles.tableHeader}>Status</Text>
          <Text style={styles.tableHeader}>Last Data Received</Text>
        </View>
        {/* Table Data */}
        {data.map((item) => (
          <TouchableOpacity
            style={styles.dataBox}
            key={item.id}
            onPress={() => navigation.navigate("Active")}
          >
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={() => {
                  toggleSelect(item.id);
                }}
              >
                {item.isSelected ? (
                  <Icon
                    name="star"
                    size={20}
                    color="black"
                    style={styles.starIcon}
                  />
                ) : (
                  <Image
                    source={require("../assets/star.png")}
                    style={styles.starIcon}
                  />
                )}
              </TouchableOpacity>

              <Text
                style={styles.rowText}
                // onPress={() => navigation.navigate("Active")}
              >
                {item.id}
              </Text>
              <Text
                style={[styles.rowText, styles.typeText]}
                // onPress={() => navigation.navigate("Active")}
              >
                {item.type}
              </Text>
              <View style={styles.statusContainer}>
                <View
                  style={[
                    styles.statusDot,
                    styles.statusDotColor,
                    {
                      backgroundColor:
                        item.status === "Active" ? "green" : "red",
                    },
                  ]}
                />
                <Text
                  style={styles.statusText}
                  // onPress={() => navigation.navigate("Active")}
                >
                  {item.status}
                </Text>
              </View>
              <Text
                style={styles.rowText}
                // onPress={() => navigation.navigate("Active")}
              >
                {item.lastDataReceived}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    paddingVertical: 20,
    paddingLeft: 21,
  },
  chair: {
    width: 47,
    height: 45,
    borderColor: COLORS.white,
    borderWidth: 2,
  },
  searchBar: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3FEDB",
    borderRadius: 1000,
    paddingStart: 16,
  },
  leftSearch: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    marginLeft: 8,
  },
  rightSearch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: "400",
    color: "#A8A8A8",
  },
  iconContainer: {
    flexDirection: "row",
  },
  HeartIcon: {
    marginLeft: 8,
  },
  FilterIcon: {
    marginLeft: 8,
    marginRight: 10,
  },
  tableContainer: {
    padding: 16,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 8,
  },
  tableHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
  dataBox: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    backgroundColor: "#E8F6FE",
    borderRadius: 4,
    marginBottom: 8,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginLeft: 18,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  rowText: {
    flex: 0.3,
    textAlign: "center",
  },
  typeText: {
    flex: 0.2,
    textAlign: "left",
    alignItems: "center",
    justifyContent: "center",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
  },
  statusDotColor: {
    backgroundColor: "transparent",
  },
  statusText: {
    fontSize: 16,
  },
});

export default InfoScreen;

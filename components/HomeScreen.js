import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/Colors";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.header}></View>
      <View style={styles.centeredContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.buttonText}>Connect to server</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 40,
    // width: 360,
    // height: 66,
  },
  centeredContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "relative",
    top: "50%",
    width: 200,
    height: 200,
  },
  buttonContainer: {
    position: "relative",
    top: "40%",
    left: "15%",
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    width: 252,
    height: 52,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#141F00",
  },
});

export default HomeScreen;
